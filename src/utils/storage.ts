import { getTokenPayload } from "./token";

const INSTANCE_KEY = "bkdInstance";
const CODE_VERIFIER_KEY = "bkdCodeVerifier";
const REDIRECT_URI_KEY = "bkdRedirectUrl";
const ACCESS_TOKEN_KEY = "bkdAccessToken";
const REFRESH_TOKEN_KEY = "bkdRefreshToken";

// The "apps" rely on this being present
const CURRENT_ACCESS_TOKEN_KEY = "CLX.LoginToken";
const LOCALE_KEY = "uiCulture";
const TOKEN_EXPIRE = "CLX.TokenExpire";

///// localStorage /////

export function getInstance(): string | null {
  return localStorage.getItem(INSTANCE_KEY);
}

export function storeInstance(instance: string): void {
  localStorage.setItem(INSTANCE_KEY, instance);
}

export function getAccessToken(scope: string): string | null {
  return localStorage.getItem(`${ACCESS_TOKEN_KEY}_${scope}`);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function storeRefreshToken(refreshToken: string | null): void {
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
}

export function storeAccessToken(scope: string, accessToken: string): void {
  localStorage.setItem(`${ACCESS_TOKEN_KEY}_${scope}`, accessToken);
}

export function resetAllTokens(): void {
  new Array(localStorage.length).fill(undefined).forEach((_, i) => {
    const key = localStorage.key(i);
    if (
      key &&
      (key.startsWith(ACCESS_TOKEN_KEY) || key === REFRESH_TOKEN_KEY)
    ) {
      localStorage.removeItem(key);
    }
  });

  sessionStorage.removeItem(CURRENT_ACCESS_TOKEN_KEY);
}

export function storeLocale(locale: string) {
  localStorage.setItem(LOCALE_KEY, locale);
}

///// sessionStorage /////

export function getCurrentAccessToken(): string | null {
  const token = sessionStorage.getItem(CURRENT_ACCESS_TOKEN_KEY);
  return token ? token.replace(/^"+|"+$/g, "") : null;
}

export function getLastAccessToken(): string | null {
  const token = localStorage.getItem(CURRENT_ACCESS_TOKEN_KEY);
  return token ? token.replace(/^"+|"+$/g, "") : null;
}

export function storeCurrentAccessToken(accessToken: string): void {
  // The access token for the current app is stored in sessionStorage
  sessionStorage.setItem(CURRENT_ACCESS_TOKEN_KEY, `"${accessToken}"`);

  // Store access token in localStorage as well:
  // - Although this causes problems when working with different apps
  //   in multiple tabs, legacy apps rely on the token being present
  //   in localStorage. Apps should _always_ read the token from
  //   sessionStorage!
  // - It also allows us to get the last used token with
  //   `getLastAccessToken`, which is used to detect the user's
  //   language. Once all legacy apps will be converted to
  //   sessionStorage, we should use another key such as
  //   'bkdLastAccessToken'
  localStorage.setItem(CURRENT_ACCESS_TOKEN_KEY, `"${accessToken}"`);

  // App Raumresevation needs TOKEN_EXPIRE in localStorage
  let { expirationTime } = getTokenPayload(accessToken);
  expirationTime = expirationTime * 1000;
  localStorage.setItem(TOKEN_EXPIRE, expirationTime.toString());
}

/**
 * Returns and removes login state from sessionStorage.
 */
export function consumeLoginState(): {
  codeVerifier: string;
  redirectUri?: string;
} | null {
  const codeVerifier = sessionStorage.getItem(CODE_VERIFIER_KEY);
  const redirectUri = sessionStorage.getItem(REDIRECT_URI_KEY) ?? undefined;

  sessionStorage.removeItem(REDIRECT_URI_KEY);
  sessionStorage.removeItem(CODE_VERIFIER_KEY);

  return codeVerifier ? { redirectUri, codeVerifier } : null;
}

export function storeLoginState(
  codeVerifier: string,
  redirectUri?: string,
): void {
  sessionStorage.setItem(CODE_VERIFIER_KEY, codeVerifier);
  if (redirectUri) {
    sessionStorage.setItem(REDIRECT_URI_KEY, redirectUri);
  } else {
    sessionStorage.removeItem(REDIRECT_URI_KEY);
  }
}

export function getLoginStateRedirectUri(): string | null {
  return sessionStorage.getItem(REDIRECT_URI_KEY);
}
