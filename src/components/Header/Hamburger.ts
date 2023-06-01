import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../../utils/theme";

@customElement("bkd-hamburger")
@localized()
export class Hamburger extends LitElement {
  @property()
  open = false;

  static styles = [
    theme,
    css`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `,
  ];

  render() {
    const icon = this.open ? "/icons/close.svg" : "/icons/hamburger.svg";
    return html`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${msg("Menü")}
      >
        <img src=${icon} alt="Hamburger" width="32" height="32" />
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-hamburger": Hamburger;
  }
}
