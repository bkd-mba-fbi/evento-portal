import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../utils/theme";

@customElement("bkd-header")
@localized()
export class Header extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        margin: 0 var(--bkd-header-margin-horizontal);
        border-bottom: 1px solid var(--bkd-func-bg-grey);
      }

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }
      }

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }

      .logo {
        width: 150px;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <img class="logo" src="logo.svg" />
        <div class="logo-caption">
          ${msg("Evento")} | Berufsbildungszentrum IDM Thun
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-header": Header;
  }
}
