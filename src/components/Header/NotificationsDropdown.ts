import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import trashIcon from "../../assets/icons/trash.svg?raw";
import {
  NotificationDataEntry,
  updateNotifications,
} from "../../utils/fetch.ts";
import { sanitize } from "../../utils/sanitize.ts";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-notifications-dropdown")
@localized()
export class NotificationsDropdown extends LitElement {
  @property()
  open = false;

  @property()
  notifications: ReadonlyArray<NotificationDataEntry> = [];

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
      }

      .notification {
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .content {
          display: flex;
          justify-content: space-between;
        }

        .subject {
          padding-right: 1rem;
        }

        .body {
          text-align: right;
        }

        button {
          align-self: end;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          display: flex;
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

  private deleteAllNotifications() {
    const notifications: ReadonlyArray<NotificationDataEntry> = [];
    updateNotifications(notifications);
    this.dispatchUpdateNotificationsEvent(notifications);
  }

  private deleteNotification(id: number) {
    const notifications: ReadonlyArray<NotificationDataEntry> =
      this.notifications.filter((notification) => notification.id !== id);
    updateNotifications(notifications);
    this.dispatchUpdateNotificationsEvent(notifications);
  }

  private dispatchUpdateNotificationsEvent(
    notifications: ReadonlyArray<NotificationDataEntry>,
  ) {
    this.dispatchEvent(
      new CustomEvent<{
        notifications: ReadonlyArray<NotificationDataEntry>;
      }>("bkdupdatenotifications", {
        bubbles: true,
        composed: true,
        detail: { notifications },
      }),
    );
  }

  private renderNotification(notification: NotificationDataEntry) {
    const sanitizedSubject = sanitize(notification.subject);
    const sanitizedBody = sanitize(notification.body);

    return html`<div class="notification">
      <div class="content">
        <div class="subject">${unsafeHTML(sanitizedSubject)}</div>
        <div class="body">${unsafeHTML(sanitizedBody)}</div>
      </div>
      <button
        type="button"
        aria-label="${msg("Benachrichtigung löschen")}"
        @click=${() => this.deleteNotification(notification.id)}
      >
        ${unsafeHTML(trashIcon)}
      </button>
    </div> `;
  }

  render() {
    if (!this.open) return;

    return html`<div id="notifications-menu">
      <div class="header">
        <span>${msg("Benachrichtigungen")}</span>
        <button
          type="button"
          ?disabled=${this.notifications.length === 0}
          @click="${() => this.deleteAllNotifications()}"
        >
          ${msg("Alle löschen")}
        </button>
      </div>
      <div class="content">
        ${this.notifications.length === 0
          ? html`<div class="notification">
              ${msg("Keine Benachrichtigungen")}
            </div>`
          : repeat(
              this.notifications,
              (notification) => notification.id,
              (notification) => this.renderNotification(notification),
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
