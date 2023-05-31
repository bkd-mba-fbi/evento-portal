import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { configureLocalization, localized } from "@lit/localize";
import { sourceLocale, targetLocales /*, allLocales*/ } from "../locales.ts";
import { theme } from "../utils/theme.ts";

/*const { setLocale } =*/ configureLocalization({
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

  render() {
    return html`
      <bkd-header></bkd-header>
      <bkd-content></bkd-content>
      <bkd-footer></bkd-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal": Portal;
  }
}
