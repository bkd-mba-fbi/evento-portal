import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../utils/theme";

@customElement("bkd-header")
@localized()
export class Header extends LitElement {
  @property()
  currentLocale = "de";

  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-header-margin-top: 12px;
        --bkd-header-margin-bottom: calc(2 * var(--bkd-header-margin-top));
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        padding: var(--bkd-header-margin-top)
          var(--bkd-header-margin-horizontal) var(--bkd-header-margin-bottom)
          var(--bkd-header-margin-horizontal);
        border-bottom: 1px solid var(--bkd-func-bg-grey);
      }

      header {
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-areas:
          "service-nav service-nav"
          "logo ."
          "logo-caption main-nav";
      }

      bkd-service-nav {
        grid-area: service-nav;
        justify-self: end;
      }

      .logo {
        grid-area: logo;
        width: 150px;
        font-size: 1rem;
        line-height: 1rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        font-weight: 500;
        color: var(--bkd-func-fg-black);
      }

      .logo-caption {
        grid-area: logo-caption;
        align-self: baseline;
      }

      bkd-main-nav {
        grid-area: main-nav;
        align-self: baseline;
        justify-self: end;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        header {
          grid-template-areas:
            "logo service-nav"
            "logo-caption logo-caption";
        }

        bkd-service-nav {
          align-self: center;
        }

        .logo {
          width: 110px;
        }

        .logo-caption {
          margin-top: 12px;
          font-size: 0.75rem;
          line-height: 0.75rem;
        }

        bkd-main-nav {
          display: none;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }

        bkd-service-nav {
          align-self: start;
          margin-top: 2px; /* Align with logo text */
        }
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    const instanceName = "Berufsbildungszentrum IDM Thun";
    const portalName = `${msg("Evento")} | ${instanceName}`;

    return html`
      <header>
        <bkd-service-nav currentLocale=${this.currentLocale}></bkd-service-nav>
        <img class="logo" src="logo.svg" alt=${msg("Evento Startseite")} />
        <div class="logo-caption">${portalName}</div>
        <bkd-main-nav></bkd-main-nav>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-header": Header;
  }
}
