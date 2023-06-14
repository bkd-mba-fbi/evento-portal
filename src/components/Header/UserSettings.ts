import { css, html, LitElement, nothing } from "lit";
import { customElement, queryAll } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";

import { theme } from "../../utils/theme.ts";
import { DropdownToggleController } from "../../controllers/dropdown-toggle.ts";
import { map } from "lit/directives/map.js";
import {
  UserSettingEntry,
  userSettingEntries,
} from "../../utils/userSettings.ts";
import { portalState } from "../../state/portal-state.ts";

@customElement("bkd-user-settings")
@localized()
export class UserSettings extends LitElement {
  @queryAll("a")
  private menuLinks?: NodeListOf<HTMLElement>;

  static styles = [
    theme,
    css`
      :host {
        display: flex;
        position: relative;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        list-style-type: none;
        padding: 0.625rem 0;
        margin-top: calc(32px + 0.5rem);
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: 12rem;
      }

      a {
        font-size: 0.875rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.5;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: var(--bkd-func-fg-black);
      }

      a img {
        margin-left: -5.25px;
      }

      a:hover {
        color: var(--bkd-brand-red);
        background: var(--bkd-brand-light-sand);
        border-left: 6px solid var(--bkd-brand-red);
        font-weight: 700;
        padding: 0 calc(1.5rem - 6px);
      }
    `,
  ];

  private settingsMenu = new DropdownToggleController(
    this,
    "service-nav-toggle",
    "service-nav-menu"
  );

  constructor() {
    super();
    new StateController(this, portalState);
  }

  render() {
    return html`
      <button
        type="button"
        id="service-nav-toggle"
        @click=${this.toggle.bind(this)}
        aria-label=${msg("Menü Benutzereinstellungen")}
        aria-expanded=${this.settingsMenu.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul id="settings-menu" role="menu" ?hidden=${!this.settingsMenu.open}>
        ${map(userSettingEntries(portalState.locale), this.renderEntry)}
      </ul>
    `;
  }

  private renderEntry(item: UserSettingEntry) {
    return html`<li role="presentation">
      <a
        role="menuitem"
        href=${item.href}
        target=${item.external ? "_blank" : "_self"}
        >${item.img
          ? html`<img src=${item.img} alt="" width="24" height="24" />`
          : nothing}
        ${msg(item.label)}</a
      >
    </li>`;
  }

  private toggle() {
    this.settingsMenu.toggle();
    if (this.settingsMenu.open) {
      document.addEventListener("keydown", this.handleKeydown);
    } else {
      document.removeEventListener("keydown", this.handleKeydown);
    }
  }

  private activeLinkIndex(): number | null {
    const active = (this.shadowRoot?.activeElement ??
      null) as HTMLElement | null;
    const index = active
      ? Array.from(this.menuLinks ?? []).indexOf(active)
      : -1;
    return index === -1 ? null : index;
  }

  private nextLinkIndex(offset: number): number {
    const active = this.activeLinkIndex();
    const first = 0;
    const last = this.menuLinks ? this.menuLinks.length - 1 : 0;

    if (active === null) {
      return offset > 0 ? first : last;
    }

    const next = active + offset;
    if (next > last) return first;
    if (next < first) return last;
    return next;
  }

  private handleKeydown = (e: KeyboardEvent) => {
    if (!this.menuLinks) return;
    switch (e.key) {
      case "ArrowDown":
        const next = this.nextLinkIndex(1);
        this.menuLinks[next].focus();
        break;
      case "ArrowUp":
        const previous = this.nextLinkIndex(-1);
        this.menuLinks[previous].focus();
        break;
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
