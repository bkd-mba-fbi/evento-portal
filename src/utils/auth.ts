import {
  OAuth2Client,
  OAuth2Error,
  OAuth2Token,
  generateCodeVerifier,
} from "@badgateway/oauth2-client";
import { generateQueryString } from "@badgateway/oauth2-client/dist/client";
import { getCodeChallenge } from "@badgateway/oauth2-client/dist/client/authorization-code";
import { getEnvSettings } from "../env-settings";
import { LOCALE_QUERY_PARAM, portalState } from "../state/portal-state";
import { tokenState } from "../state/token-state";
import { log } from "./logging";
import {
  consumeLoginState,
  getAccessToken,
  getInstance,
  storeInstance,
  storeLoginState,
} from "./storage";
import { isValidToken } from "./token";
import { clearTokenRenewalTimers } from "./token-renewal";

const envSettings = getEnvSettings();

if (typeof envSettings?.oAuthServer !== "string") {
  throw new Error("Invalid 'oAuthServer' setting");
}

if (typeof envSettings?.oAuthPrefix !== "string") {
  throw new Error("Invalid 'oAuthPrefix' setting");
}

if (typeof envSettings?.oAuthClientId !== "string") {
  throw new Error("Invalid 'clientId' setting");
}

/**
 * Returns a new OAuth client instance
 */
export function createOAuthClient(): OAuth2Client {
  return new OAuth2Client({
    server: envSettings.oAuthServer,
    clientId: envSettings.oAuthClientId,
    tokenEndpoint: `${envSettings.oAuthPrefix}/Authorization/Token`,
    get authorizationEndpoint() {
      return getAuthorizationEndpoint();
    },
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
  scope: string,
  locale: string,
): Promise<void> {
  const loginState = consumeLoginState();
  const loginResult = await getTokenAfterLogin(client, loginState);
  if (loginResult) {
    // Successfully logged in
    log("Successfully logged in");
    handleLoginResult(loginResult, loginState);
    return;
  }

  const substitutionResult = getTokenAfterSubstitutionRedirect();
  if (substitutionResult) {
    // Started or stopped substitution
    log("Successfully started or stopped substitution");
    handleSubstitutionResult(substitutionResult);
    return;
  }

  await activateTokenForScope(client, scope, locale);
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
  scope: string,
  locale: string,
): Promise<void> {
  log(`Activate token for scope "${scope}" and locale "${locale}"`);

  if (tokenState.isRefreshTokenExpired()) {
    // Not authenticated or refresh token expired, redirect to login
    log("Not authenticated or refresh token expired, redirect to login");
    return redirect(client, scope, locale, loginUrl);
  }

  const currentAccessToken = tokenState.accessToken;
  const cachedAccessToken = getAccessToken(scope);

  if (isValidToken(currentAccessToken, scope, locale)) {
    // Current token for scope/locale already set
    log(
      `Current token for scope "${scope}" and locale "${locale}" already set`,
    );
  } else if (isValidToken(cachedAccessToken, scope, locale)) {
    // Token for scope/locale cached, set as current
    log(
      `Token for scope "${scope}" and locale "${locale}" cached, set as current`,
    );
    tokenState.accessToken = cachedAccessToken;
  } else {
    // No token for scope/locale present or half expired, redirect for
    // token fetch/refresh
    log(
      `No token for scope "${scope}" and locale "${locale}" present or half expired, redirect for token fetch/refresh`,
    );
    await redirect(client, scope, locale, refreshUrl);
  }
}

export async function logout(client: OAuth2Client): Promise<void> {
  const instance = getInstance();
  if (!instance) throw new Error("No instance available");

  const { accessToken, scope, locale } = tokenState;
  if (!accessToken || !scope || !locale) return;

  // Logout & reset tokens
  try {
    await request(
      client,
      `${envSettings.oAuthPrefix}/Authorization/${instance}/Logout`,
      {
        access_token: accessToken,
      },
    );
  } catch (e) {
    // Only catch if JSON syntax error (API responds with HTML)
    if (!(e instanceof SyntaxError)) {
      throw e;
    }
  } finally {
    tokenState.resetAllTokens();
    clearTokenRenewalTimers();

    // Redirect to login with scope/locale of current token
    await redirect(client, scope, locale, loginUrl);
  }
}

function getAuthorizationEndpoint(): string {
  const instance = getInstance();
  return instance
    ? `${envSettings.oAuthPrefix}/Authorization/${instance}/Login`
    : `${envSettings.oAuthPrefix}/Authorization/Login`;
}

type RedirectUrlBuilder = (
  client: OAuth2Client,
  scope: string,
  locale: string,
  redirectUri: string,
  codeVerifier: string,
) => Promise<URL>;

export async function redirect(
  client: OAuth2Client,
  scope: string,
  locale: string,
  buildUrl: RedirectUrlBuilder,
): Promise<void> {
  const codeVerifier = await generateCodeVerifier(); // Random PKCE code
  const redirectUri = new URL(document.location.href); // URL to come back to after login
  redirectUri.searchParams.set(LOCALE_QUERY_PARAM, locale); // Use the "new locale" (if the user switches language), not the current one
  storeLoginState(codeVerifier, redirectUri.toString());

  const url = await buildUrl(
    client,
    scope,
    locale,
    redirectUri.toString(),
    codeVerifier,
  );
  document.location.href = url.toString();
}

export const loginUrl: RedirectUrlBuilder = async (
  client,
  scope,
  locale,
  redirectUri,
  codeVerifier,
) => {
  const url = new URL(await client.getEndpoint("authorizationEndpoint"));

  const [codeChallengeMethod, codeChallenge] =
    await getCodeChallenge(codeVerifier);
  url.searchParams.set("clientId", client.settings.clientId);
  url.searchParams.set("redirectUrl", redirectUri);
  url.searchParams.set("culture_info", locale);
  url.searchParams.set("application_scope", scope);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("code_challenge_method", codeChallengeMethod);
  url.searchParams.set("code_challenge", codeChallenge);

  // Apparently we cannot use `client.authorizationCode.getAuthorizeUri`
  // since the Evento API does not care about common conventions
  return url;
};

export const refreshUrl: RedirectUrlBuilder = async (
  client,
  scope,
  locale,
  redirectUri,
  codeVerifier,
) => {
  const url = new URL(
    `${envSettings.oAuthPrefix}/Authorization/RefreshPublic`,
    client.settings.server,
  );

  const [codeChallengeMethod, codeChallenge] =
    await getCodeChallenge(codeVerifier);

  // url.searchParams.set("clientId", client.settings.clientId);
  url.searchParams.set("redirectUrl", redirectUri);
  url.searchParams.set("culture_info", locale);
  url.searchParams.set("application_scope", scope);
  url.searchParams.set("refresh_token", tokenState.refreshToken ?? "");
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
  } | null,
): Promise<OAuth2Token | null> {
  const code = new URLSearchParams(document.location.search).get("code");
  if (code && loginState?.redirectUri) {
    return await client.authorizationCode.getTokenFromCodeRedirect(
      document.location.href,
      {
        redirectUri: loginState.redirectUri,
        codeVerifier: loginState.codeVerifier,
      },
    );
  }
  return null;
}

function handleLoginResult(
  { refreshToken, accessToken }: OAuth2Token,
  loginState: {
    codeVerifier: string;
    redirectUri?: string;
  } | null,
): void {
  tokenState.refreshToken = refreshToken;
  tokenState.accessToken = accessToken;

  // Remember the chosen instance for later logins
  const instanceId = tokenState.accessTokenPayload?.instanceId;
  if (instanceId) {
    storeInstance(instanceId);
  }

  if (loginState?.redirectUri) {
    portalState.navigate(new URL(loginState.redirectUri));
  }
}

/**
 * When starting or stopping a substitution a redirect is made, which
 * will return with a new token with the adjusted roles/permissions.
 *
 * Documentation:
 * - Start: https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Stellvertretung/Stellvertretung-Token/#stellvertretung-starten
 * - Stop: https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Stellvertretung/Stellvertretung-Token/#stellvertretung-beenden
 */
function getTokenAfterSubstitutionRedirect(): OAuth2Token | null {
  const params = new URLSearchParams(document.location.search);
  const accessToken = params.get("access_token");
  const expiresIn = params.get("expires_in");
  const refreshToken = params.get("refresh_token");

  if (accessToken) {
    return {
      accessToken,
      expiresAt: expiresIn ? Date.now() + parseInt(expiresIn, 10) * 1000 : null,
      refreshToken: refreshToken || null,
    };
  }

  return null;
}

function handleSubstitutionResult(token: OAuth2Token): void {
  const { refreshToken, accessToken } = token;
  tokenState.refreshToken = refreshToken;
  tokenState.accessToken = accessToken;

  // Remove sensitive information from URL
  const url = new URL(document.location.href);
  url.searchParams.delete("access_token");
  url.searchParams.delete("expires_in");
  url.searchParams.delete("refresh_token");
  if (window.parent === window) {
    history.replaceState({}, "", url);
  } else {
    // Only do this inside iframe, prevents loading the entire portal app inside the iframe
    window.parent.location.assign(url);
  }
}

/**
 * To be able to use a custom endpoint path we copy this from the
 * oauth2-client package.
 */
async function request<T = unknown>(
  client: OAuth2Client,
  endpointPath: string,
  body?: Record<string, string>,
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
