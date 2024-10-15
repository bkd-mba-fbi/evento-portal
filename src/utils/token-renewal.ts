import { tokenState } from "../state/token-state";
import { log, logLazy } from "./logging";
import { getAccessToken, getRefreshToken } from "./storage";
import {
  TokenPayload,
  getTokenExpireIn,
  getTokenPayload,
  isTokenAlmostExpired,
} from "./token";

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
  renewRefreshToken,
  renewAccessToken,
}: {
  renewRefreshToken: (scope: string, locale: string) => Promise<void>;
  renewAccessToken: (scope: string, locale: string) => Promise<void>;
}): void {
  // Refresh token renewal
  scheduleExpiration(
    TokenType.Refresh,
    tokenState.refreshTokenPayload,
    renewRefreshToken,
  );
  tokenState.onRefreshTokenUpdate((refreshToken) =>
    scheduleExpiration(TokenType.Refresh, refreshToken, renewRefreshToken),
  );

  // Access token renewal
  scheduleExpiration(
    TokenType.Access,
    tokenState.accessTokenPayload,
    renewAccessToken,
  );
  tokenState.onAccessTokenUpdate((accessToken) =>
    scheduleExpiration(TokenType.Access, accessToken, renewAccessToken),
  );
}

export function clearTokenRenewalTimers(): void {
  Object.values(TokenType).forEach((type) => {
    if (expirationTimers[type]) {
      clearTimeout(expirationTimers[type]);
    }
  });
}

/**
 * Calls the `onExpire` callback when the given token expires, canceling
 * ongoing timers for the given token type (if there are any).
 */
function scheduleExpiration(
  type: TokenType,
  token: TokenPayload | null,
  onRenew: (scope: string, locale: string) => Promise<void>,
): void {
  if (expirationTimers[type]) {
    clearTimeout(expirationTimers[type]);
  }

  if (!token) return;

  const expireIn = getTokenExpireIn(token);
  // Don't set timer for already expired token since it will be
  // handled by the auth.ts logic and would cause a redirection loop
  if (expireIn && expireIn > 0) {
    expirationTimers[type] = setTimeout(
      () => tokenExpired(type, token, onRenew),
      expireIn,
    );
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

/**
 * Calls the `renew` of only one tab (i.e. the "leader" tab), while the others
 * will wait, to make sure we only renew a token once.
 */
function tokenExpired(
  type: TokenType,
  token: TokenPayload,
  onRenew: (scope: string, locale: string) => Promise<void>,
): void {
  const { scope, locale } = token;
  log(`Expired ${type} token for scope "${scope}" and locale "${locale}"`);

  // Make sure only one tab will actually renew the token (the "leader"), the
  // others will wait
  withLock(type, scope, async () => {
    const actualToken =
      type === TokenType.Access
        ? getAccessToken(scope)
        : getRefreshToken(scope);
    const payload = actualToken ? getTokenPayload(actualToken) : null;

    const expirationTime = new Date();
    if (payload) {
      expirationTime.setTime(payload.expirationTime * 1000);
    }
    if (payload) {
      if (isTokenAlmostExpired(payload)) {
        await onRenew(payload.scope, payload.locale);
      } else {
        log(
          `The ${type} token for scope "${scope}" and locale "${locale}" has already been updated by another tab`,
        );
        if (type === TokenType.Access) {
          // Token has already been renewed by another tab
          tokenState.accessToken = actualToken;
        } else {
          // Token has already been renewed by another tab
          tokenState.refreshToken = actualToken;
        }
      }
    }
  });
}

function withLock(
  type: TokenType,
  scope: string,
  callback: () => Promise<void>,
): void {
  navigator.locks.request(`bkdTokenRenewal_${type}_${scope}`, async () => {
    await callback();
  });
}
