import { css, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { map } from "lit/directives/map.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { StateController } from "@lit-app/state";

import { theme } from "../../utils/theme";
import { Navigation, NavigationGroup, NavigationItem } from "../../settings";
import arrowDownIcon from "../../assets/icons/arrow-down.svg?raw";
import arrowUpIcon from "../../assets/icons/arrow-up.svg?raw";
import { userSettingItems, UserSettingItem } from "../../utils/userSettings.ts";
import { isExternalUrl } from "../../utils/url.ts";
import { portalState } from "../../state/portal-state.ts";

@customElement("bkd-mobile-nav")
@localized()
export class MobileNav extends LitElement {
  @property()
  navigation: Navigation = [];

  @property()
  currentItem: NavigationItem | null = null;

  @state()
  openGroup: NavigationGroup | null = null;

  static styles = [
    theme,
    css`
      :host {
        position: absolute;
        width: 100vw;
        padding: 1.25rem;
        left: 0;
        top: calc(100% + 1px); /* Place right below header */
        max-height: calc(100vh - 100% - 1px);
        display: flex;
        gap: 5rem;
        flex-direction: column;
        background-color: var(--bkd-func-bg-white);
        box-shadow: 0 2px 6px -1px var(--bkd-mobile-nav-shadow);
      }

      a {
        color: var(--bkd-brand-black);
        text-decoration: none;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li.group {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .group-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
        background: transparent;
      }

      .group-header label {
        font-weight: 600;
        cursor: pointer;
      }

      ul.items {
        height: 0;
      }

      .open ul.items {
        height: auto;
      }

      li.item {
        display: flex; /* Animated bottom border should only be as wide as the link */
        border-left: 4px solid transparent;
        padding: 0.5rem 1.25rem;
      }

      li.item a {
        font-weight: 400;
      }

      li.item a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-brand-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      li.item a:hover::after,
      li.item a:focus::after,
      li.item a:active::after {
        transform: scaleX(1);
      }

      li.item.active {
        border-color: var(--bkd-brand-red);
        background-color: var(--bkd-brand-sand);
      }

      li.item.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.item.active a:after {
        border-color: transparent;
      }

      .service-nav {
        background: var(--bkd-brand-sand);
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .service-nav div {
        font-size: 0.875rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        font-style: normal;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .service-nav img {
        margin-left: -5.25px;
      }

      bkd-language-switcher {
        padding-left: 0.75rem;
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.openGroupOfCurrentItem();
  }

  private openGroupOfCurrentItem(): void {
    if (this.navigation && this.currentItem && !this.openGroup) {
      this.openGroup =
        this.navigation.find((group) =>
          group.items.find(({ key }) => key === this.currentItem?.key)
        ) ?? null;
    }
  }

  private handleGroupClick(event: MouseEvent, group: NavigationGroup): void {
    event.preventDefault();
    this.openGroup = group.label !== this.openGroup?.label ? group : null;
  }

  private handleNavItemClick(event: MouseEvent, item: NavigationItem): void {
    event.preventDefault();
    // TODO: perform actual navigation action
    this.currentItem = item;
  }

  private handleSettingsItemClick(e: MouseEvent, item: UserSettingItem) {
    e.preventDefault();
    if (isExternalUrl(item.href, this.baseURI)) {
      window.open(item.href, "_blank");
    }
    console.log("handleSettingsItemClick", item); // TODO: perform actual navigation action
    // TODO handle dropdown toggle close
  }

  private renderGroup(group: NavigationGroup) {
    const open = group.label === this.openGroup?.label;
    return html`
      <li
        class=${classMap({
          group: true,
          open,
        })}
        aria-expanded=${open}
      >
        <button
          class="group-header"
          @click=${(e: MouseEvent) => this.handleGroupClick(e, group)}
        >
          <label> ${group.label} </label>
          ${unsafeHTML(open ? arrowUpIcon : arrowDownIcon)}
        </button>
        <ul class="items">
          ${map(group.items, this.renderNavItem.bind(this))}
        </ul>
      </li>
    `;
  }

  private renderNavItem(item: NavigationItem) {
    const active = item.key === this.currentItem?.key;
    return html`
      <li
        class=${classMap({
          item: true,
          active,
        })}
      >
        <a
          href="#"
          @click=${(e: MouseEvent) => this.handleNavItemClick(e, item)}
        >
          ${item.label}
        </a>
      </li>
    `;
  }

  private renderSettingsItem(item: UserSettingItem) {
    return html`<li class="item">
      <a
        href=${item.href}
        @click=${(e: MouseEvent) => this.handleSettingsItemClick(e, item)}
      >
        <div>
          ${item.img
            ? html`<img src=${item.img} alt="" width="24" height="24" />`
            : nothing}
          ${msg(item.label)}
        </div>
      </a>
    </li>`;
  }

  render() {
    return html`
      <ul class="nav">
        ${map(this.navigation, this.renderGroup.bind(this))}
      </ul>
      <div class="service-nav">
        <ul>
          ${map(
            userSettingItems(portalState.locale),
            this.renderSettingsItem.bind(this)
          )}
        </ul>
        <bkd-language-switcher></bkd-language-switcher>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-mobile-nav": MobileNav;
  }
}
