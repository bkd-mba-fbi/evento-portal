import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { theme } from "../../utils/theme";

@customElement("bkd-service-nav")
@localized()
export class ServiceNav extends LitElement {
  @property()
  currentLocale = "de";

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
      <div
        style="background: #000; border-radius: 50%; width: 32px; height: 32px;"
      ></div>
      <div
        style="background: #000; border-radius: 50%; width: 32px; height: 32px;"
      ></div>
      <div
        style="background: #000; border-radius: 50%; width: 32px; height: 32px;"
      ></div>
      <bkd-language-switcher
        currentLocale=${this.currentLocale}
      ></bkd-language-switcher>
      <bkd-hamburger></bkd-hamburger>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-service-nav": ServiceNav;
  }
}
