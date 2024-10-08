import {
  getCurrentAccessToken,
  getRefreshToken,
  resetAllTokens,
  storeAccessToken,
  storeCurrentAccessToken,
  storeRefreshToken,
} from "../utils/storage";
import { TokenPayload, getTokenPayload } from "../utils/token";

type State = {
  refreshToken: string | null;
  refreshTokenPayload: TokenPayload | null;
  accessToken: string | null;
  accessTokenPayload: TokenPayload | null;
};
type Subscriber = (token: TokenPayload | null) => void;
type Unsubscribe = () => void;

/**
 * A facade to manage the OAuth refresh & access tokens and their persistance.
 *
 * The tokens will be parsed and their payload is available via a member of this
 * class.
 *
 * If assigned, the tokens will be stored in browser storage:
 *   - The refresh token is stored in localStorage
 *   - The access token is stored in sessionStorage and cached per scope in
 *     localStorage (see "Authentication & Token Handling" in doc/sad.md)
 *
 * Use `onRefreshTokenUpdate` and `onAccessTokenUpdate` to subscribe to token
 * changes, e.g. for token renewal or other token-dependnant logic.
 */
class TokenState {
  private state: State = {
    refreshToken: null,
    refreshTokenPayload: null,
    accessToken: null,
    accessTokenPayload: null,
  };
  private refreshTokenSubscribers: Subscriber[] = [];
  private accessTokenSubscribers: Subscriber[] = [];

  constructor() {
    this.initState();

    // Call after-functions for initial token values
    this.afterRefreshTokenUpdate(this.refreshToken, false);
    this.afterAccessTokenUpdate(this.accessToken, false);
  }

  /**
   * The raw refresh token
   */
  get refreshToken() {
    return this.state.refreshToken;
  }
  set refreshToken(refreshToken: string | null) {
    this.state.refreshToken = refreshToken;
    this.afterRefreshTokenUpdate(refreshToken);
  }

  /**
   * The refresh token's parsed payload
   */
  get refreshTokenPayload() {
    return this.state.refreshTokenPayload;
  }

  /**
   * The current raw access token
   */
  get accessToken() {
    return this.state.accessToken;
  }
  set accessToken(accessToken: string | null) {
    this.state.accessToken = accessToken;
    this.afterAccessTokenUpdate(accessToken);
  }

  /**
   * The current access token's parsed payload
   */
  get accessTokenPayload() {
    return this.state.accessTokenPayload;
  }

  /**
   * Returns true if an access token is present
   */
  get authenticated(): boolean {
    return Boolean(this.accessToken);
  }

  /**
   * The scope of the current access token
   */
  get scope(): string | null {
    return this.accessTokenPayload?.scope ?? null;
  }

  /**
   * The locale of the current access token
   */
  get locale(): string | null {
    return this.accessTokenPayload?.locale ?? null;
  }

  /**
   * The instanceId of the current access token
   */
  get instanceId(): string | null {
    return this.accessTokenPayload?.instanceId ?? null;
  }

  /**
   * Deletes all tokens, including the ones in localStorage of other scopes
   */
  resetAllTokens(): void {
    this.state.refreshToken = null;
    this.state.refreshTokenPayload = null;

    this.state.accessToken = null;
    this.state.accessTokenPayload = null;

    resetAllTokens();
  }

  /**
   * Calls callback whenever the refresh token updates & returns an
   * unsubscribe function.
   */
  onRefreshTokenUpdate(callback: Subscriber): Unsubscribe {
    this.refreshTokenSubscribers.push(callback);

    return () => {
      const index = this.refreshTokenSubscribers.findIndex(
        (s) => s === callback,
      );
      this.refreshTokenSubscribers.splice(index, 1);
    };
  }

  /**
   * Calls callback whenever the current access token updates &
   * returns an unsubscribe function.
   */
  onAccessTokenUpdate(callback: Subscriber): Unsubscribe {
    this.accessTokenSubscribers.push(callback);

    return () => {
      const index = this.accessTokenSubscribers.findIndex(
        (s) => s === callback,
      );
      this.accessTokenSubscribers.splice(index, 1);
    };
  }

  private initState(): void {
    const accessToken = getCurrentAccessToken();
    const refreshToken = accessToken
      ? getRefreshToken(getTokenPayload(accessToken).scope)
      : null;
    this.state = {
      refreshToken,
      refreshTokenPayload: null,
      accessToken,
      accessTokenPayload: null,
    };
  }

  private afterRefreshTokenUpdate(
    refreshToken: string | null,
    store = true,
  ): void {
    const payload = refreshToken ? getTokenPayload(refreshToken) : null;
    this.state.refreshTokenPayload = payload;

    if (refreshToken && payload && store) {
      storeRefreshToken(payload.scope, refreshToken);
    }

    this.notifyRefreshTokenSubscribers();
  }

  private afterAccessTokenUpdate(
    accessToken: string | null,
    store = true,
  ): void {
    const payload = accessToken ? getTokenPayload(accessToken) : null;
    this.state.accessTokenPayload = payload;

    if (accessToken && payload && store) {
      storeAccessToken(payload.scope, accessToken);
      storeCurrentAccessToken(accessToken);
    }

    this.notifyAccessTokenSubscribers();
  }

  private notifyRefreshTokenSubscribers(): void {
    this.refreshTokenSubscribers.forEach((callback) =>
      callback(this.refreshTokenPayload),
    );
  }

  private notifyAccessTokenSubscribers(): void {
    this.accessTokenSubscribers.forEach((callback) =>
      callback(this.accessTokenPayload),
    );
  }
}

export const tokenState = new TokenState();
