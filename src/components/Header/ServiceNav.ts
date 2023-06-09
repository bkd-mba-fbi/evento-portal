import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { theme } from "../../utils/theme";

@customElement("bkd-service-nav")
@localized()
export class ServiceNav extends LitElement {
  @property()
  mobileNavOpen = false;

  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        margin-left: 1rem;
      }

      bkd-hamburger {
        display: none;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        bkd-user-settings {
          display: none;
        }

        bkd-language-switcher {
          display: none;
        }

        bkd-hamburger {
          display: inherit;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          gap: 1.5rem;
        }
      }
    `,
  ];

  render() {
    return html`
      <bkd-substitutions-toggle></bkd-substitutions-toggle>
      <erz-notifications></erz-notifications>
      <bkd-user-settings></bkd-user-settings>
      <bkd-language-switcher></bkd-language-switcher>
      <bkd-hamburger
        id="mobile-nav-toggle"
        .open=${this.mobileNavOpen}
      ></bkd-hamburger>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-service-nav": ServiceNav;
  }
}
