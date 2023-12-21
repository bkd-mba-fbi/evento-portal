import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import spinnerIcon from "../../assets/icons/spinner.svg?raw";
import trashIcon from "../../assets/icons/trash.svg?raw";
import { NotificationDataEntry } from "../../utils/fetch.ts";
import { sanitize } from "../../utils/sanitize.ts";
import { theme } from "../../utils/theme.ts";
import { NotificationsState } from "./NotificationsToggle.ts";

@customElement("bkd-notifications-dropdown")
@localized()
export class NotificationsDropdown extends LitElement {
  @property()
  open = false;

  @property()
  state = NotificationsState.PENDING;

  @property()
  notifications: ReadonlyArray<NotificationDataEntry> = [];

  static styles = [
    theme,
    css`
      :host {
        display: block;
        position: relative;
      }

      #notifications-dropdown {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        margin-top: 0.5rem;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: 33vw;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        align-items: center;
        padding: 1rem;

        h2 {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.16;
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
      }

      .content {
        overflow-y: auto;
      }

      .pending,
      .error {
        padding: 1rem;
      }

      .error {
        color: var(--bkd-func-bg-red);
      }

      .notification {
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .text {
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
        :host {
          position: absolute;
          top: calc(100% - 0.5rem); /* Place right below header */
          left: 0;
          width: 100vw;
        }

        #notifications-dropdown {
          min-width: auto;
          width: 100vw;
          right: 0;
        }
      }
    `,
  ];

  private handleDeleteAllNotifications() {
    this.dispatchEvent(
      new CustomEvent<void>("bkddeleteallnotifications", {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleDeleteNotification(id: number) {
    this.dispatchEvent(
      new CustomEvent<{ id: number }>("bkddeletenotification", {
        bubbles: true,
        composed: true,
        detail: { id },
      }),
    );
  }

  renderContent() {
    if (this.state === NotificationsState.ERROR)
      return html`<div class="error">
        ${msg("Fehler beim Laden der Benachrichtigungen")}
      </div>`;
    if (this.state === NotificationsState.PENDING)
      return html`<div class="pending">${unsafeHTML(spinnerIcon)}</div>`;
    return this.notifications.length === 0
      ? html`<div class="notification">${msg("Keine Benachrichtigungen")}</div>`
      : repeat(
          this.notifications,
          (notification) => notification.id,
          (notification) => this.renderNotification(notification),
        );
  }

  private renderNotification(notification: NotificationDataEntry) {
    const sanitizedSubject = sanitize(notification.subject);
    const sanitizedBody = sanitize(notification.body);

    return html`<div class="notification">
      <div class="text">
        <div class="subject">${unsafeHTML(sanitizedSubject)}</div>
        <div class="body">${unsafeHTML(sanitizedBody)}</div>
      </div>
      <button
        type="button"
        aria-label="${msg("Benachrichtigung löschen")}"
        @click=${() => this.handleDeleteNotification(notification.id)}
      >
        ${unsafeHTML(trashIcon)}
      </button>
    </div> `;
  }

  render() {
    if (!this.open) return;

    return html`<div id="notifications-dropdown">
      <div class="header">
        <h2>${msg("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications || this.notifications.length === 0}
          @click="${() => this.handleDeleteAllNotifications()}"
        >
          ${msg("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-dropdown": NotificationsDropdown;
  }
}
