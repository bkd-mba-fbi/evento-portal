import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-notifications-dropdown")
@localized()
export class NotificationsDropdown extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        position: relative;
      }

      #notifications-menu {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        margin-top: calc(32px + 0.5rem);
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: 33vw;
      }

      .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        align-items: center;
        padding: 1rem;
      }

      button {
        font-weight: 400;
        background-color: var(--bkd-func-bg-anthrazit);
        color: var(--bkd-func-bg-white);
        border-radius: 40px;
        border: none;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
      }

      button:hover,
      button:focus {
        background-color: var(--bkd-func-bg-anthrazit-hover);
      }

      .content {
        padding: 1rem;
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        #notifications-menu {
          position: fixed;
          min-width: auto;
          width: 100vw;
          right: 0;
        }
      }
    `,
  ];

  @property()
  open = false;

  render() {
    if (!this.open) return;

    return html`<div id="notifications-menu">
      <div class="header">
        <span>${msg("Benachrichtigungen")}</span>
        <button type="button">${msg("Alle löschen")}</button>
      </div>
      <div class="content">${msg("Keine Benachrichtigungen")}</div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-dropdown": NotificationsDropdown;
  }
}
