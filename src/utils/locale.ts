import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales, allLocales } from "../locales";
import { LOCALE_QUERY_PARAM } from "../state/portal-state";
import { getTokenPayload } from "./token";
import { getLastAccessToken, getLoginStateRedirectUri } from "./storage";

const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(/* @vite-ignore */ `/locales/${locale}.js`),
});

export { getLocale };

/**
 * Detects and returns locale from the following sources (ordered by
 * priority):
 * 1. Query param in URL
 * 2. Login state redirect URI in sessionStorage (when coming back from
 *    OAuth redirect)
 * 3. Last used access token (when already authenticated)
 * 4. Browser language
 * 5. Source/default locale (de-CH)
 */
export function getInitialLocale() {
  const locale =
    getLocaleFromUrl() ??
    getLocaleFromRedirectUri() ??
    getLocaleFromLastAccessToken();
  return locale && isValidLocale(locale)
    ? locale
    : getBrowserLocale() ?? sourceLocale;
}

/**
 * Update @lit/localize locale & HTML document language
 */
export async function updateLocale(locale: string): Promise<void> {
  await setLocale(locale);
  document.documentElement.lang = locale;
}

function getLocaleFromUrl(): string | null {
  const url = new URL(location.href);
  return url.searchParams.get(LOCALE_QUERY_PARAM);
}

function isValidLocale(locale: string): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return allLocales.includes(locale as any);
}

function getBrowserLocale(): string | null {
  const lang = navigator.language.slice(0, 2);
  return allLocales.find((locale) => locale.startsWith(lang)) ?? null;
}

function getLocaleFromRedirectUri(): string | null {
  const redirectUri = getLoginStateRedirectUri();
  if (!redirectUri) return null;

  const url = new URL(redirectUri);
  return url.searchParams.get(LOCALE_QUERY_PARAM);
}

function getLocaleFromLastAccessToken(): string | null {
  const token = getLastAccessToken();
  if (!token) return null;

  return getTokenPayload(token).locale;
}
