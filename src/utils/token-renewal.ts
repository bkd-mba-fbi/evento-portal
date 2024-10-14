import { tokenState } from "../state/token-state";
import { logLazy } from "./logging";
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

/**
 * Initialize the timers to update the current refresh and access token (has to
 * be called only once). The timers wil restart whenever a new token is set on
 * the tokenState.
 */
export function initializeTokenRenewal({
  onRefreshTokenExpiration,
  onAccessTokenExpiration,
}: {
  onRefreshTokenExpiration: (refreshToken: TokenPayload | null) => void;
  onAccessTokenExpiration: (accessToken: TokenPayload | null) => void;
}): void {
  // Refresh token renewal
  renewRefreshTokenOnExpiration(
    tokenState.refreshTokenPayload,
    onRefreshTokenExpiration,
  );
  tokenState.onRefreshTokenUpdate((refreshToken) =>
    renewRefreshTokenOnExpiration(refreshToken, onRefreshTokenExpiration),
  );

  // Access token renewal
  renewAccessTokenOnExpiration(
    tokenState.accessTokenPayload,
    onAccessTokenExpiration,
  );
  tokenState.onAccessTokenUpdate((accessToken) =>
    renewAccessTokenOnExpiration(accessToken, onAccessTokenExpiration),
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
  refreshToken: TokenPayload | null,
  onRefreshTokenExpiration: (refreshToken: TokenPayload | null) => void,
): void {
  onExpiration(TokenType.Refresh, refreshToken, () =>
    onRefreshTokenExpiration(refreshToken),
  );
}

function renewAccessTokenOnExpiration(
  accessToken: TokenPayload | null,
  onAccessTokenExpiration: (accessToken: TokenPayload | null) => void,
): void {
  onExpiration(TokenType.Access, accessToken, () =>
    onAccessTokenExpiration(accessToken),
  );
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
