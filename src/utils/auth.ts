import {
  OAuth2Client,
  OAuth2Error,
  OAuth2Token,
  generateCodeVerifier,
} from "@badgateway/oauth2-client";
import { getCodeChallenge } from "@badgateway/oauth2-client/dist/client/authorization-code";
import { generateQueryString } from "@badgateway/oauth2-client/dist/client";
import {
  consumeLoginState,
  getAccessToken,
  getCurrentAccessToken,
  getInstance,
  getRefreshToken,
  resetAllTokens,
  storeCurrentAccessToken,
  storeInstance,
  storeLoginState,
  storeToken,
} from "./storage";
import { getTokenPayload, isTokenExpired, isTokenHalfExpired } from "./token";
import { settings } from "../settings";
import { portalState } from "../state/portal-state";

/**
 * Returns a new OAuth client instance
 */
export function createOAuthClient(): OAuth2Client {
  return new OAuth2Client({
    server: settings.oauth.server,
    clientId: settings.oauth.clientId,
    tokenEndpoint: "/OAuth/Authorization/Token",
    authorizationEndpoint: getAuthorizationEndpoint(),
    fetch: (...args) => fetch(...args), // Fix for https://github.com/badgateway/oauth2-client/issues/105
  });
}

/**
 * Handles the OAuth 2.0 Authorization Code Flow with Proof Key for
 * Code Exchange (PKCE) and should be called when initializing the
 * portal. Please refer the README for a detailed description of the
 * flow.
 */
export async function ensureAuthenticated(
  client: OAuth2Client,
  scope: string
): Promise<void> {
  const loginState = consumeLoginState();
  const loginResult = await getTokenAfterLogin(client, loginState);
  if (loginResult) {
    // Successfully logged in
    console.log("Successfully logged in");
    handleLoginResult(loginResult, loginState);
  } else if (isTokenExpired(getRefreshToken())) {
    // Not authenticated, redirect to login
    console.log("Not authenticated, redirect to login");
    await redirect(client, scope, loginUrl);
  } else {
    console.log(`Activate token for scope "${scope}"`);
    await activateTokenForScope(client, scope);
  }
}

/**
 * Store an access token for the given scope in sessionStorage as
 * "CLX.LoginToken" for the current app to use it. Access tokens for
 * each scope are kept in localStorage, as well is the refresh token.
 *
 * - If the refresh token is expired, it redirects to the login page.
 * - If the currently stored access token already matches the given
 *   scope, we're fine.
 * - If we already have a token for the given scope in localStorage,
 *   use this as the current access token.
 * - If no current or cached access token is present or the token is
 *   expired, perform a refresh request to fetch a new token for the
 *   given scope and set this as the current access token.
 */
export async function activateTokenForScope(
  client: OAuth2Client,
  scope: string
): Promise<void> {
  if (isTokenExpired(getRefreshToken())) {
    // Refresh token expired, redirect to login
    console.log("Refresh token expired, redirect to login");
    return redirect(client, scope, loginUrl);
  }

  const currentAccessToken = getCurrentAccessToken();
  const cachedAccessToken = getAccessToken(scope);

  const currentPayload = currentAccessToken
    ? getTokenPayload(currentAccessToken)
    : null;

  if (currentPayload?.scope === scope) {
    if (isTokenHalfExpired(currentPayload)) {
      console.log(
        `Current token for scope "${scope}" half expired, redirect for token refresh`
      );
      await redirect(client, scope, refreshUrl);
    } else {
      // Current token for requested scope already present
      console.log(`Current token for scope "${scope}" already present`);
    }
  } else if (!cachedAccessToken || isTokenHalfExpired(cachedAccessToken)) {
    // Token for requested scope has to be fetched or refreshed
    console.log(
      `No Token for scope "${scope}" present or half expired, redirect for token refresh`
    );
    await redirect(client, scope, refreshUrl);
  } else {
    // Token for requested scope present, set as current
    console.log(`Token for requested scope "${scope}" present, set as current`);
    storeCurrentAccessToken(cachedAccessToken);
  }
}

export async function logout(
  client: OAuth2Client,
  defaultScope: string
): Promise<void> {
  const instance = getInstance();
  if (!instance) throw new Error("No instance available");

  // Logout & reset tokens
  await request(client, `/OAuth/Authorization/${instance}/Logout`);
  resetAllTokens();

  // Redirct to login
  await redirect(client, defaultScope, loginUrl);
}

function getAuthorizationEndpoint(): string {
  const instance = getInstance();
  return instance
    ? `/OAuth/Authorization/${instance}/Login`
    : "/OAuth/Authorization/Login";
}

type RedirectUrlBuilder = (
  client: OAuth2Client,
  scope: string,
  redirectUri: string,
  codeVerifier: string
) => Promise<URL>;

async function redirect(
  client: OAuth2Client,
  scope: string,
  buildUrl: RedirectUrlBuilder
): Promise<void> {
  const codeVerifier = await generateCodeVerifier(); // Random PKCE code
  const redirectUri = document.location.href; // URL to come back to after login
  storeLoginState(codeVerifier, redirectUri);

  const url = await buildUrl(client, scope, redirectUri, codeVerifier);
  document.location.href = url.toString();
}

const loginUrl: RedirectUrlBuilder = async (
  client,
  scope,
  redirectUri,
  codeVerifier
) => {
  const url = new URL(await client.getEndpoint("authorizationEndpoint"));

  const [codeChallengeMethod, codeChallenge] = await getCodeChallenge(
    codeVerifier
  );
  url.searchParams.set("clientId", client.settings.clientId);
  url.searchParams.set("redirectUrl", redirectUri);
  url.searchParams.set("culture_info", "de-CH"); // TODO
  url.searchParams.set("application_scope", scope);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("code_challenge_method", codeChallengeMethod);
  url.searchParams.set("code_challenge", codeChallenge);

  // Apparently we cannot use `client.authorizationCode.getAuthorizeUri`
  // since the Evento API does not care about common conventions
  return url;
};

const refreshUrl: RedirectUrlBuilder = async (
  client,
  scope,
  redirectUri,
  codeVerifier
) => {
  const url = new URL(
    "/OAuth/Authorization/RefreshPublic",
    client.settings.server
  );

  const [codeChallengeMethod, codeChallenge] = await getCodeChallenge(
    codeVerifier
  );
  const refreshToken = getRefreshToken();

  // url.searchParams.set("clientId", client.settings.clientId);
  url.searchParams.set("redirectUrl", redirectUri);
  url.searchParams.set("culture_info", "de-CH"); // TODO
  url.searchParams.set("application_scope", scope);
  url.searchParams.set("refresh_token", refreshToken ?? "");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("code_challenge_method", codeChallengeMethod);
  url.searchParams.set("code_challenge", codeChallenge);

  return url;
};

async function getTokenAfterLogin(
  client: OAuth2Client,
  loginState: {
    codeVerifier: string;
    redirectUri?: string;
  } | null
): Promise<OAuth2Token | null> {
  const code = new URLSearchParams(document.location.search).get("code");
  if (code && loginState?.redirectUri) {
    return await client.authorizationCode.getTokenFromCodeRedirect(
      document.location.href,
      {
        redirectUri: loginState.redirectUri,
        codeVerifier: loginState.codeVerifier,
      }
    );
  }
  return null;
}

function handleLoginResult(
  token: OAuth2Token,
  loginState: {
    codeVerifier: string;
    redirectUri?: string;
  } | null
): void {
  const { accessToken } = token;
  const { scope, instanceId } = getTokenPayload(accessToken);
  storeToken(scope, token);
  storeCurrentAccessToken(accessToken);

  // Remember the chosen instance for later logins
  storeInstance(instanceId);

  if (loginState?.redirectUri) {
    portalState.setRedirectUrl(new URL(loginState.redirectUri));
  }
}

/**
 * To be able to use a custom endpoint path we copy this from the
 * oauth2-client package.
 */
async function request<T = unknown>(
  client: OAuth2Client,
  endpointPath: string,
  body?: Record<string, string>
): Promise<T> {
  const uri = new URL(endpointPath, client.settings.server).toString();
  const headers: Record<string, string> = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const resp = await fetch(uri, {
    method: "POST",
    body: body && generateQueryString(body),
    headers,
  });

  if (resp.ok) {
    return await resp.json();
  }

  let jsonError;
  let errorMessage;
  let oauth2Code;
  if (resp.headers.get("Content-Type")?.startsWith("application/json")) {
    jsonError = await resp.json();
  }

  if (jsonError?.error) {
    // This is likely an OAUth2-formatted error
    errorMessage = "OAuth2 error " + jsonError.error + ".";
    if (jsonError.error_description) {
      errorMessage += " " + jsonError.error_description;
    }
    oauth2Code = jsonError.error;
  } else {
    errorMessage = "HTTP Error " + resp.status + " " + resp.statusText;
    oauth2Code = null;
  }
  throw new OAuth2Error(errorMessage, oauth2Code, resp.status);
}
