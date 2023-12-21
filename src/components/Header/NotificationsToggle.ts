import { LitElement, css, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";
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
import { NotificationsDropdown } from "./NotificationsDropdown.ts";

const envSettings = getEnvSettings();
if (typeof envSettings?.notificationRefreshTime !== "number") {
  throw new Error("Invalid 'notificationRefreshTime' setting");
}

export enum NotificationsState {
  PENDING = "pending",
  ERROR = "error",
  SUCCESS = "success",
}

@customElement("bkd-notifications-toggle")
@localized()
export class NotificationsToggle extends LitElement {
  @query("button")
  private toggleElement?: HTMLElement;

  @query("bkd-notifications-dropdown")
  private dropdownElement?: NotificationsDropdown;

  @state()
  notifications?: ReadonlyArray<NotificationDataEntry>;

  @state()
  state = NotificationsState.PENDING;

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

  private dropdown = new DropdownController(this, {
    queryToggleElement: () => this.toggleElement ?? null,
    queryMenuElement: () => this.dropdownElement?.shadowRoot ?? null,
    queryItems: () =>
      this.dropdownElement?.shadowRoot?.querySelectorAll<HTMLElement>(
        "button",
      ) ?? null,
    queryFocused: () =>
      (this.dropdownElement?.shadowRoot?.activeElement ??
        null) as HTMLElement | null,
  });

  private handleDeleteAllNotifications() {
    const notifications: ReadonlyArray<NotificationDataEntry> = [];
    updateNotifications(notifications);
    this.notifications = notifications;
  }

  private handleDeleteNotification(event: CustomEvent<{ id: number }>) {
    if (!this.notifications) return;
    const notifications: ReadonlyArray<NotificationDataEntry> =
      this.notifications.filter(
        (notification) => notification.id !== event.detail.id,
      );
    updateNotifications(notifications);
    this.notifications = notifications;
  }

  private async fetch(): Promise<void> {
    try {
      this.notifications = await fetchNotifications();
      this.state = NotificationsState.SUCCESS;
    } catch (e) {
      this.state = NotificationsState.ERROR;
    }
  }

  render() {
    return html` <button
        id="notifications-toggle"
        type="button"
        aria-label="${msg("Benachrichtigungen")}"
        @click="${() => this.dropdown.toggle()}"
      >
        ${unsafeHTML(bellIcon)}
        <span
          class="circle"
          ?hidden=${this.state !== NotificationsState.SUCCESS ||
          this.notifications?.length === 0}
        >
          ${this.notifications?.length}
        </span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
        .state=${this.state}
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
