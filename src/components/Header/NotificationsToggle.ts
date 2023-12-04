import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import bellIcon from "../../assets/icons/bell.svg?raw";
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
      }
    `,
  ];
  render() {
    return html`<button type="button" aria-label="${msg("Benachrichtigungen")}">
      ${unsafeHTML(bellIcon)}
    </button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-toggle": NotificationsToggle;
  }
}
