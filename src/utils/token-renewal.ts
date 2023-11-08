import { OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";
import { loginUrl, redirect, refreshUrl } from "./auth";
import { log, logLazy } from "./logging";
import { getCurrentAccessToken } from "./storage";
import { getTokenExpireIn, getTokenPayload } from "./token";

enum TokenType {
  Refresh = "refresh",
  Access = "access",
}

const expirationTimers: Record<
  TokenType,
  ReturnType<typeof setTimeout> | undefined
> = {
  refresh: undefined,
  access: undefined,
};

export function renewTokenOnExpiration(
  client: OAuth2Client,
  token: OAuth2Token,
): void {
  const { refreshToken, accessToken } = token;
  if (refreshToken) {
    renewRefreshTokenOnExpiration(client, refreshToken);
  }
  renewAccessTokenOnExpiration(client, accessToken);
}

export function renewRefreshTokenOnExpiration(
  client: OAuth2Client,
  refreshToken: string,
): void {
  onExpiration(TokenType.Refresh, refreshToken, () => {
    // Get the scope of the "current" access token at the time the
    // refresh token expires, since the user may have switched scopes
    // in the meantime
    const accessToken = getCurrentAccessToken();
    if (!accessToken) {
      return;
    }

    log(`Refresh token expired, redirect to login`);
    const { scope, locale } = getTokenPayload(accessToken);
    redirect(client, scope, locale, loginUrl);
  });
}

export function renewAccessTokenOnExpiration(
  client: OAuth2Client,
  accessToken: string,
): void {
  const { scope, locale } = getTokenPayload(accessToken);
  onExpiration(TokenType.Access, accessToken, () => {
    log(
      `Access token for scope "${scope}" and locale "${locale}" expired, redirect for token fetch/refresh`,
    );
    redirect(client, scope, locale, refreshUrl);
  });
}

export function clearTokenRenewalTimers(): void {
  Object.values(TokenType).forEach((type) => {
    if (expirationTimers[type]) {
      clearTimeout(expirationTimers[type]);
    }
  });
}

/**
 * Calls the given callback when the given token expires, canceling
 * ongoing timers for the given token type (if there are any).
 */
function onExpiration(
  type: TokenType,
  token: string,
  callback: () => void,
): void {
  if (expirationTimers[type]) {
    clearTimeout(expirationTimers[type]);
  }
  expirationTimers[type] = setTimeout(callback, getTokenExpireIn(token));

  logLazy(() => {
    const { expirationTime } = getTokenPayload(token);
    const expirationDate = new Date();
    expirationDate.setTime(expirationTime * 1000);
    return `Scheduled ${type} token expiration timeout in ${Math.floor(
      getTokenExpireIn(token) / 1000 / 60,
    )} minutes (at ${expirationDate})`;
  });
}
