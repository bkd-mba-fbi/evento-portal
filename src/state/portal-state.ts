import { State, property, query } from "@lit-app/state";
import { getLocale, updateLocale } from "../utils/locale";
import { updateQueryParam } from "../utils/routing";

const LOCALE_QUERY_PARAM = "locale";

export class PortalState extends State {
  @query({ parameter: LOCALE_QUERY_PARAM })
  @property({ value: getLocale() })
  locale!: string;

  subscribeLocale(callback: (locale: string) => void) {
    return this.subscribe((_, locale) => callback(locale), "locale");
  }
}

export const portalState = new PortalState();

/**
 * Update locale if state changes
 */
portalState.subscribeLocale((locale) => {
  updateLocale(locale);
  updateQueryParam(LOCALE_QUERY_PARAM, locale);
});
updateLocale(portalState.locale); // Initially
