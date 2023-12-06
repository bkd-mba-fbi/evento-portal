import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import { NotificationData } from "../../utils/fetch.ts";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-notifications-dropdown")
@localized()
export class NotificationsDropdown extends LitElement {
  @property()
  open = false;

  @property()
  notificationData: ReadonlyArray<NotificationData> = [];

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

      button:disabled {
        cursor: default;
        background-color: var(--bkd-func-bg-grey);
      }

      .notification {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid var(--bkd-func-bg-grey);

        .subject {
          padding-right: 1rem;
        }

        .body {
          text-align: right;
        }
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

  private renderNotificationData(data: NotificationData) {
    return html`<div class="notification">
      <div class="subject">${unsafeHTML(data.subject)}</div>
      <div class="body">${unsafeHTML(data.body)}</div>
    </div>`;
  }

  render() {
    if (!this.open) return;

    return html`<div id="notifications-menu">
      <div class="header">
        <span>${msg("Benachrichtigungen")}</span>
        <button
          type="button"
          ?disabled=${this.notificationData.length === 0}
          @click="${() => console.log("delete")}"
        >
          ${msg("Alle löschen")}
        </button>
      </div>
      <div class="content">
        ${this.notificationData.length === 0
          ? msg("Keine Benachrichtigungen")
          : this.notificationData.map((data: NotificationData) =>
              this.renderNotificationData(data),
            )}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-dropdown": NotificationsDropdown;
  }
}
