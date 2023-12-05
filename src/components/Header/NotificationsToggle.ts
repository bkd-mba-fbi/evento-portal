import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import bellIcon from "../../assets/icons/bell.svg?raw";
import { DropdownController } from "../../controllers/dropdown.ts";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-notifications-toggle")
@localized()
export class NotificationsToggle extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: flex;
      }

      button {
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
        display: flex;
      }

      .circle {
        color: var(--bkd-func-bg-white);
        background-color: var(--bkd-brand-red);
        box-shadow: 0 0 0 2px var(--bkd-func-bg-white);
        border-radius: 50%;
        font-weight: 700;
        font-size: small;
        line-height: 1.5;
        text-align: center;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: 2px;
      }
    `,
  ];

  private dropdown = new DropdownController(
    this,
    "notifications-toggle",
    "notifications-menu",
  );

  render() {
    return html` <button
        id="notifications-toggle"
        type="button"
        aria-label="${msg("Benachrichtigungen")}"
        @click="${() => this.dropdown.toggle()}"
      >
        ${unsafeHTML(bellIcon)}
        <span class="circle" hidden="hidden">3</span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
      ></bkd-notifications-dropdown>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-toggle": NotificationsToggle;
  }
}
