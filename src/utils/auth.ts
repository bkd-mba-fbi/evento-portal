import {
  OAuth2Client,
  OAuth2Error,
  OAuth2Token,
  generateCodeVerifier,
} from "@badgateway/oauth2-client";
import { generateQueryString } from "@badgateway/oauth2-client/dist/client";
import { getCodeChallenge } from "@badgateway/oauth2-client/dist/client/authorization-code";
import { getEnvSettings } from "../env-settings";
import { settings } from "../settings";
import { LOCALE_QUERY_PARAM, portalState } from "../state/portal-state";
import { tokenState } from "../state/token-state";
import { log } from "./logging";
import { buildUrl } from "./routing";
import {
  consumeLoginState,
  getAccessToken,
  getInstance,
  getRefreshToken,
  storeInstance,
  storeLoginState,
} from "./storage";
import { isTokenExpired, isValidToken } from "./token";
import {
  clearTokenRenewalTimers,
  initializeTokenRenewal,
} from "./token-renewal";

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
export async function initAuthentication(
  client: OAuth2Client,
  scope: string,
  locale: string,
): Promise<void> {
  initializeTokenRenewal({
    renewRefreshToken: (scope, locale) => renewToken(client, scope, locale),
    renewAccessToken: (scope, locale) => renewToken(client, scope, locale),
  });

  const loginState = consumeLoginState();
  const loginResult = await getTokenAfterLogin(client, loginState);
  if (loginResult) {
    log("Successfully logged in");
    handleLoginResult(loginResult, loginState);
    return;
  }

  const substitutionResult = getTokenAfterSubstitutionRedirect();
  if (substitutionResult) {
    log("Successfully started or stopped substitution");
    handleSubstitutionResult(substitutionResult);
    return;
  }

  await activateTokenForScope(client, scope, locale);
}

/**
 * Make sure valid access/refresh tokens for the given scope/locale
 * are present and assigned as "current" token. Otherwise renew the
 * tokens or redirect to login.
 */
export async function activateTokenForScope(
  client: OAuth2Client,
  scope: string,
  locale: string,
): Promise<void> {
  log(`Activate token for scope "${scope}" and locale "${locale}"`);
  updateTokenStateForScope(scope, locale);

  if (isTokenExpired(tokenState.refreshTokenPayload)) {
    log("Not authenticated or refresh token expired, redirect to login");
    return login(client, scope, locale);
  }

  if (!tokenState.accessToken) {
    log(
      `Token for scope "${scope}" and locale "${locale}" expired or not available, renew`,
    );
    return renewToken(client, scope, locale);
  }
}

/**
 * Redirects to login page (starts PKCE login flow).
 */
export async function login(
  client: OAuth2Client,
  scope: string,
  locale: string,

  /**
   * URL to redirect to when coming back from OAuth provider (default
   * is current location).
   */
  redirectUri = new URL(document.location.href),
): Promise<void> {
  // Use the "new locale" (if the user switches language), not the current one
  redirectUri.searchParams.set(LOCALE_QUERY_PARAM, locale);

  // Apparently we cannot use `client.authorizationCode.getAuthorizeUri`
  // since the Evento API does not care about common conventions
  const url = new URL(await client.getEndpoint("authorizationEndpoint"));

  const codeVerifier = await generateCodeVerifier(); // Random PKCE code
  storeLoginState(codeVerifier, redirectUri.toString());
  const [codeChallengeMethod, codeChallenge] =
    await getCodeChallenge(codeVerifier);

  url.searchParams.set("clientId", client.settings.clientId);
  url.searchParams.set("redirectUrl", redirectUri.toString());
  url.searchParams.set("culture_info", locale);
  url.searchParams.set("application_scope", scope);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("code_challenge_method", codeChallengeMethod);
  url.searchParams.set("code_challenge", codeChallenge);

  document.location.href = url.toString();
}

/**
 * Revokes all tokens and redirects to login page.
 */
export async function logout(client: OAuth2Client): Promise<void> {
  const instance = getInstance();
  if (!instance) throw new Error("No instance available");

  const { accessToken, scope, locale } = tokenState;
  if (!accessToken || !scope || !locale) return;

  // Logout & reset tokens
  try {
    await postLogout(client, instance, accessToken);
  } catch (e) {
    // Only catch if JSON syntax error (API responds with HTML)
    if (!(e instanceof SyntaxError)) {
      throw e;
    }
  } finally {
    tokenState.resetAllTokens();
    clearTokenRenewalTimers();

    // Redirect to login with scope/locale of current token
    await login(
      client,
      scope,
      locale,
      new URL(buildUrl(settings.navigationHome)), // Make sure the user lands on home after the next login
    );
  }
}

function getAuthorizationEndpoint(): string {
  const instance = getInstance();
  return instance
    ? `${envSettings.oAuthPrefix}/Authorization/${instance}/Login`
    : `${envSettings.oAuthPrefix}/Authorization/Login`;
}

/**
 * Assigns a matching access and refresh token for the given
 * scope/locale on the token state (updating the "current"
 * token in sessionStorage).
 */
function updateTokenStateForScope(scope: string, locale: string): void {
  // Try state's "current" token (initialized from sessionStorage)
  if (isValidToken(tokenState.accessToken, scope, locale)) {
    log(
      `Current token for scope "${scope}" and locale "${locale}" already set`,
    );
    return;
  }

  // Try cached access token for scope (from localStorage)
  const cachedAccessToken = getAccessToken(scope);
  if (isValidToken(cachedAccessToken, scope, locale)) {
    log(
      `Token for scope "${scope}" and locale "${locale}" cached, set as current`,
    );
    tokenState.accessToken = cachedAccessToken; // Will update "current" token in sessionStorage
    tokenState.refreshToken = getRefreshToken(scope);
    return;
  }

  // No access token for scope/locale or expired
  log(
    `Token for scope "${scope}" and locale "${locale}" not present or expired`,
  );
  tokenState.accessToken = null;
  tokenState.refreshToken = getRefreshToken(scope);
}

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
 * Asynchronously renew an access/refresh token pair (the old
 * access/refresh token will be revoked due to token rotation, tokens
 * of other scopes stay valid).
 */
export async function renewToken(
  client: OAuth2Client,
  scope: string,
  locale: string,
): Promise<void> {
  const instance = getInstance();
  const refreshToken = getRefreshToken(scope);
  if (!instance || !refreshToken) {
    log(
      `Refresh token for scope "${scope}" not present or expired, redirect to login`,
    );
    return login(client, scope, locale);
  }

  log(
    `Renewing refresh & access token for scope "${scope}" and locale "${locale}"`,
  );
  try {
    const { refreshToken: newRefreshToken, accessToken: newAccessToken } =
      await postTokenRefresh(client, instance, scope, locale, refreshToken);
    log("Received renewed tokens");
    tokenState.refreshToken = newRefreshToken;
    tokenState.accessToken = newAccessToken;
  } catch {
    log("Token renewal failed, redirect to login");
    return login(client, scope, locale);
  }
}

async function postTokenRefresh(
  client: OAuth2Client,
  instance: string,
  scope: string,
  locale: string,
  refreshToken: string,
): Promise<OAuth2Token> {
  const {
    access_token: newAccessToken,
    refresh_token: newRefreshToken,
    expires_in: expiresIn,
  } = await request<{
    token_type: string;
    expires_in: number;
    refresh_token: string;
    access_token: string;
  }>(client, `${envSettings.oAuthPrefix}/Authorization/${instance}/Token`, {
    refresh_token: refreshToken,
    grant_type: "refresh_token",
    client_id: envSettings.oAuthClientId,
    culture_info: locale,
    scope,
  });
  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
    expiresAt: expiresIn ? Date.now() + expiresIn * 1000 : null,
  };
}

function postLogout(
  client: OAuth2Client,
  instance: string,
  accessToken: string,
) {
  return request(
    client,
    `${envSettings.oAuthPrefix}/Authorization/${instance}/Logout`,
    {
      access_token: accessToken,
    },
  );
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
  throw new OAuth2Error(errorMessage, oauth2Code);
}
