import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../locales.ts";

const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(/* @vite-ignore */ `/locales/${locale}.js`),
});

export { getLocale };

/**
 * Update @lit/localize locale & HTML document language
 */
export function updateLocale(locale: string): void {
  setLocale(locale);
  document.documentElement.lang = locale;
  // TODO: ...or just reload whole app to refetch the data in the corresponding language?
}
