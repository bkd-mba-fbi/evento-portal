import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../../utils/theme";
import "../header/LanguageSwitcher";

@customElement("bkd-header-unrestricted")
@localized()
export class HeaderUnrestricted extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-header-margin-top: 12px;
        --bkd-header-margin-bottom: calc(2 * var(--bkd-header-margin-top));
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        position: relative;
        padding: var(--bkd-header-margin-top)
          var(--bkd-header-margin-horizontal) var(--bkd-header-margin-bottom)
          var(--bkd-header-margin-horizontal);
        border-bottom: 1px solid var(--bkd-func-bg-grey);
      }

      header {
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-areas:
          "lang lang"
          "logo ."
          "logo-caption logo-caption";
      }

      .logo {
        grid-area: logo;
        display: block;
        width: 150px;
      }

      .logo-caption {
        grid-area: logo-caption;
        align-self: baseline;
        max-width: 21rem;
        line-height: 2.5625rem;
        vertical-align: middle;
      }

      bkd-language-switcher {
        grid-area: lang;
        justify-self: end;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        .logo {
          width: 110px;
        }

        .logo-caption {
          margin-top: 12px;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 0.75rem;
          max-width: 13.125rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  render() {
    return html`
      <header role="banner">
        <img class="logo" src="../logo.svg" alt=${msg("Evento")} />
        <div class="logo-caption">Evento</div>
        <bkd-language-switcher></bkd-language-switcher>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-header-unrestricted": HeaderUnrestricted;
  }
}
