import { tokenState } from "../state/token-state";
import { log, logLazy } from "./logging";
import { getAccessToken, getRefreshToken } from "./storage";
import {
  TOKEN_ALMOST_EXPIRY_MS,
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
 * be called only once). The timers will restart whenever a new token is set on
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
 * Calls the `onRenew` callback when the given token expires,
 * canceling ongoing timers for the given token type (if there are
 * any).
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

  // We want to schedule the timer not when the token is actually expired, but a
  // bit before (when it will be almost expired but still valid). This is to
  // make sure we have a valid token while we are fetching the new one, to avoid
  // timing issues where apps would make requests with an expired token.
  const actualExpireIn = getTokenExpireIn(token);
  const almostExpireIn = actualExpireIn - TOKEN_ALMOST_EXPIRY_MS;

  if (actualExpireIn <= 0) {
    // Don't schedule timer for already expired token, since this can only be
    // the case initially and is already handled by the auth.ts logic in
    // `activateTokenForScope`).
    return;
  }

  // If we're receiving a token that is already almost expired, we want to wait
  // until it actually expires, otherwise we'd cause a renewal loop. We even
  // wait 1s more than the actual expiration time to make sure it is really
  // expired and we're not receiving another token with expiration time 0 (which
  // would result in no timer being scheduled).
  const expireIn =
    almostExpireIn > 0 ? almostExpireIn : Math.max(actualExpireIn + 1000, 0);
  expirationTimers[type] = setTimeout(
    () => tokenExpired(type, token, onRenew),
    expireIn,
  );
  logLazy(() => {
    const expirationDate = new Date();
    expirationDate.setTime(Date.now() + expireIn);
    return `Scheduled ${type} token expiration timeout in ${Math.round(
      expireIn / 1000 / 60,
    )} minutes (at ${expirationDate})`;
  });
}

/**
 * Calls the `onRenew` callback of only one tab (i.e. the "leader"
 * tab), while the others will wait, to make sure we only renew a
 * token once.
 */
function tokenExpired(
  type: TokenType,
  token: TokenPayload,
  onRenew: (scope: string, locale: string) => Promise<void>,
): void {
  const { scope, locale } = token;
  log(`Expired ${type} token for scope "${scope}" and locale "${locale}"`);

  // Create a lock to make sure only the "leader" tab will actually
  // renew the token, the others will wait and then update their
  // tokens in `tokenState`
  withLock(scope, async () => {
    const actualToken =
      type === TokenType.Access
        ? getAccessToken(scope)
        : getRefreshToken(scope);
    const payload = actualToken ? getTokenPayload(actualToken) : null;
    if (payload) {
      if (isTokenAlmostExpired(payload)) {
        // The tab that wins the lock first will renew the token
        await onRenew(payload.scope, payload.locale);
      } else {
        // The tabs that subsequently get the lock will use the already renewed token
        log(
          `The ${type} token for scope "${scope}" and locale "${locale}" has already been updated by another tab`,
        );
        if (type === TokenType.Access) {
          tokenState.accessToken = actualToken;
        } else {
          tokenState.refreshToken = actualToken;
        }
      }
    }
  });
}

/**
 * Creates a lock per scope and makes sure only the callback of one tab at a
 * time will be executed (leader election).
 *
 * See also: https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API
 */
function withLock(scope: string, callback: () => Promise<void>): void {
  navigator.locks.request(`bkdTokenRenewal_${scope}`, async () => {
    await callback();
  });
}
