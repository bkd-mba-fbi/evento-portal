import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { configureLocalization, localized } from "@lit/localize";
import { sourceLocale, targetLocales } from "../locales.ts";
import {
  customProperties,
  registerLightDomStyles,
  theme,
} from "../utils/theme.ts";
import {
  activateTokenForScope,
  createOAuthClient,
  ensureAuthenticated,
} from "../utils/auth.ts";
import { settings } from "../settings.ts";

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    :root {
      ${customProperties}
    }
  `.toString()
);

const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(/* @vite-ignore */ `/locales/${locale}.js`),
});

@customElement("bkd-portal")
@localized()
export class Portal extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content {
        flex: auto;
      }
    `,
  ];

  private oAuthClient = createOAuthClient();

  constructor() {
    super();

    this.updateDocumentLang(getLocale());
    ensureAuthenticated(this.oAuthClient, this.getScopeFromState());
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("popstate", this.handleStateChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this.handleStateChange);
  }

  private handleStateChange = (event: PopStateEvent) => {
    activateTokenForScope(this.oAuthClient, event.state.scope);
  };

  private getScopeFromState(): string {
    const url = new URL(location.href);
    const app = url.searchParams.get("app");

    return (
      (app && settings.apps.find(({ key }) => key === app)?.scope) ||
      settings.apps[0].scope
    );
  }

  private handleLocaleChange(event: CustomEvent): void {
    const locale = event.detail.locale;
    setLocale(locale);
    this.updateDocumentLang(locale);
    // TODO: ...or just reload whole app to refetch the data in the corresponding language?
  }

  private updateDocumentLang(lang: string): void {
    document.documentElement.lang = lang;
  }

  render() {
    const currentLocale = getLocale();

    return html`
      <bkd-header
        currentLocale=${currentLocale}
        @bkdlocalechange=${this.handleLocaleChange.bind(this)}
      ></bkd-header>
      <bkd-content></bkd-content>
      <bkd-footer currentLocale=${currentLocale}></bkd-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal": Portal;
  }
}
