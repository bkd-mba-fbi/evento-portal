import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import bellIcon from "../../assets/icons/bell.svg?raw";
import { DropdownController } from "../../controllers/dropdown.ts";
import { getEnvSettings } from "../../env-settings.ts";
import {
  NotificationDataEntry,
  fetchNotifications,
  updateNotifications,
} from "../../utils/fetch.ts";
import { theme } from "../../utils/theme.ts";

const envSettings = getEnvSettings();
if (typeof envSettings?.notificationRefreshTime !== "number") {
  throw new Error("Invalid 'notificationRefreshTime' setting");
}

@customElement("bkd-notifications-toggle")
@localized()
export class NotificationsToggle extends LitElement {
  @state()
  notifications: ReadonlyArray<NotificationDataEntry> = [];

  static styles = [
    theme,
    css`
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
        font-size: 0.85rem;
        line-height: 1.5;
        text-align: center;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: -10px;
        margin-top: 2px;
      }
    `,
  ];

  private interval: ReturnType<typeof setInterval> | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.fetch();
    this.interval = setInterval(
      () => this.fetch(),
      envSettings.notificationRefreshTime * 1000,
    );
  }

  disconnectedCallback() {
    clearInterval(this.interval);
    super.disconnectedCallback();
  }

  private dropdown = new DropdownController(
    this,
    "notifications-toggle",
    "notifications-dropdown",
  );

  private handleDeleteAllNotifications() {
    const notifications: ReadonlyArray<NotificationDataEntry> = [];
    updateNotifications(notifications);
    this.notifications = notifications;
  }

  private handleDeleteNotification(event: CustomEvent<{ id: number }>) {
    const notifications: ReadonlyArray<NotificationDataEntry> =
      this.notifications.filter(
        (notification) => notification.id !== event.detail.id,
      );
    updateNotifications(notifications);
    this.notifications = notifications;
  }

  private async fetch(): Promise<void> {
    this.notifications = await fetchNotifications();
  }

  render() {
    return html` <button
        id="notifications-toggle"
        type="button"
        aria-label="${msg("Benachrichtigungen")}"
        @click="${() => this.dropdown.toggle()}"
      >
        ${unsafeHTML(bellIcon)}
        <span class="circle" ?hidden=${this.notifications.length === 0}>
          ${this.notifications.length}
        </span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
        .notifications=${this.notifications}
        @bkddeleteallnotifications=${this.handleDeleteAllNotifications.bind(
          this,
        )}
        @bkddeletenotification=${this.handleDeleteNotification.bind(this)}
      >
      </bkd-notifications-dropdown>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-toggle": NotificationsToggle;
  }
}
