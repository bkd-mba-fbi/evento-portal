import { OAuth2Client } from "@badgateway/oauth2-client";
import { tokenState } from "../state/token-state";
import { loginUrl, redirect, refreshUrl } from "./auth";
import { log, logLazy } from "./logging";
import { TokenPayload, getTokenExpireIn } from "./token";

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

export function initializeTokenRenewal(client: OAuth2Client): void {
  renewRefreshTokenOnExpiration(client, tokenState.refreshTokenPayload);
  tokenState.onRefreshTokenUpdate((refreshToken) =>
    renewRefreshTokenOnExpiration(client, refreshToken),
  );

  renewAccessTokenOnExpiration(client, tokenState.accessTokenPayload);
  tokenState.onAccessTokenUpdate((accessToken) =>
    renewAccessTokenOnExpiration(client, accessToken),
  );
}

export function clearTokenRenewalTimers(): void {
  Object.values(TokenType).forEach((type) => {
    if (expirationTimers[type]) {
      clearTimeout(expirationTimers[type]);
    }
  });
}

function renewRefreshTokenOnExpiration(
  client: OAuth2Client,
  refreshToken: TokenPayload | null,
): void {
  onExpiration(TokenType.Refresh, refreshToken, () => {
    // Get the scope of the "current" access token at the time the
    // refresh token expires, since the user may have switched scopes
    // in the meantime
    const accessToken = tokenState.accessTokenPayload;
    if (!accessToken) return;

    log(`Refresh token expired, redirect to login`);
    const { scope, locale } = accessToken;
    redirect(loginUrl, { client, scope, locale });
  });
}

function renewAccessTokenOnExpiration(
  client: OAuth2Client,
  accessToken: TokenPayload | null,
): void {
  onExpiration(TokenType.Access, accessToken, () => {
    if (!accessToken) return;

    const { scope, locale } = accessToken;
    log(
      `Access token for scope "${scope}" and locale "${locale}" expired, redirect for token fetch/refresh`,
    );
    redirect(refreshUrl, { client, scope, locale });
  });
}

/**
 * Calls the given callback when the given token expires, canceling
 * ongoing timers for the given token type (if there are any).
 */
function onExpiration(
  type: TokenType,
  token: TokenPayload | null,
  callback: () => void,
): void {
  if (expirationTimers[type]) {
    clearTimeout(expirationTimers[type]);
  }

  const expireIn = token && getTokenExpireIn(token);
  // Don't set timer for already expired token since it will be
  // handled by the auth.ts logic and would cause a redirection loop
  if (expireIn && expireIn > 0) {
    expirationTimers[type] = setTimeout(callback, expireIn);
    logLazy(() => {
      const { expirationTime } = token;
      const expirationDate = new Date();
      expirationDate.setTime(expirationTime * 1000);
      return `Scheduled ${type} token expiration timeout in ${Math.floor(
        expireIn / 1000 / 60,
      )} minutes (at ${expirationDate})`;
    });
  }
}
