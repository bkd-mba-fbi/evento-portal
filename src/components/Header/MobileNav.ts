import { LitElement, css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";
import arrowDownIcon from "../../assets/icons/arrow-down.svg?raw";
import arrowUpIcon from "../../assets/icons/arrow-up.svg?raw";
import { NavigationGroup, NavigationItem, settings } from "../../settings";
import { portalState } from "../../state/portal-state.ts";
import { getNavigationItem } from "../../utils/navigation";
import { buildUrl } from "../../utils/routing.ts";
import { theme } from "../../utils/theme";
import {
  UserSettingsItem,
  userSettingsItems,
} from "../../utils/user-settings.ts";

@customElement("bkd-mobile-nav")
@localized()
export class MobileNav extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        position: absolute;
        width: 100vw;
        padding: 1.25rem;
        left: 0;
        top: calc(100% + 1px); /* Place right below header */
        height: calc(100vh - 100% - 1px);
        background-color: var(--bkd-func-bg-white);
      }

      nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
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
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .service-nav li {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 36px;
        line-height: 1.5;
      }

      .service-nav a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        margin-top: 2px;
      }

      .service-nav a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      .service-nav a:hover::after,
      .service-nav a:focus::after {
        transform: scaleX(1);
      }

      bkd-language-switcher {
        margin-left: -0.75rem;
      }
    `,
  ];

  @state()
  private openGroup: NavigationGroup | null = null;

  constructor() {
    super();
    new StateController(this, portalState);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.openGroupOfCurrentItem();
    this.addEventListener("keyup", this.handleKeyup);
  }

  disconnectedCallback(): void {
    this.removeEventListener("keyup", this.handleKeyup);
    super.disconnectedCallback();
  }

  private handleKeyup = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      // When tabbing through the menu, make sure the group of the
      // element we are focusing is open
      this.openGroupOfFocusedItem();
    }
  };

  private openGroupOfCurrentItem(): void {
    if (!this.openGroup) {
      this.openGroup = portalState.navigationGroup;
    }
  }

  private openGroupOfFocusedItem(): void {
    const activeElement = this.shadowRoot?.activeElement;
    if (activeElement instanceof HTMLElement) {
      const itemKey = activeElement.dataset.itemKey;
      if (itemKey) {
        const { group } = getNavigationItem(settings.navigation, itemKey);
        if (group && group.label !== this.openGroup?.label) {
          this.openGroup = group;
        }
      }
    }
  }

  private handleGroupClick(event: MouseEvent, group: NavigationGroup): void {
    event.preventDefault();
    this.openGroup = group.label !== this.openGroup?.label ? group : null;
  }

  private handleNavItemClick(event: MouseEvent, item: NavigationItem): void {
    event.preventDefault();
    this.dispatchEvent(
      new CustomEvent<{ item: NavigationItem }>("bkdnavitemclick", {
        detail: { item },
        composed: true,
        bubbles: true,
      }),
    );
  }

  private handleSettingsItemClick(
    event: MouseEvent,
    item: UserSettingsItem,
  ): void {
    this.dispatchEvent(
      new CustomEvent<{ item: UserSettingsItem; event: Event }>(
        "bkdsettingsitemclick",
        {
          detail: { item, event },
          composed: true,
          bubbles: true,
        },
      ),
    );
  }

  private renderGroup(group: NavigationGroup) {
    const open = group.label === this.openGroup?.label;
    return html`
      <li
        class=${classMap({
          group: true,
          open,
        })}
        .ariaExpanded=${open}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${(e: MouseEvent) => this.handleGroupClick(e, group)}
        >
          <label> ${group.label} </label>
          ${unsafeHTML(open ? arrowDownIcon : arrowUpIcon)}
        </button>
        <ul class="items">
          ${map(group.items, this.renderNavItem.bind(this))}
        </ul>
      </li>
    `;
  }

  private renderNavItem(item: NavigationItem) {
    const active = item.key === portalState.navigationItemKey;
    return html`
      <li
        class=${classMap({
          item: true,
          active,
        })}
      >
        <a
          href=${buildUrl(item)}
          data-item-key=${item.key}
          @click=${(e: MouseEvent) => this.handleNavItemClick(e, item)}
        >
          ${item.label}
        </a>
      </li>
    `;
  }

  private renderSettingsItem(item: UserSettingsItem) {
    return html`<li>
      <a
        href=${item.href}
        target=${item.external ? "_blank" : "_self"}
        @click=${(e: MouseEvent) => this.handleSettingsItemClick(e, item)}
      >
        ${item.label}
      </a>
      ${item.img
        ? html`<img src=${item.img} alt="" width="24" height="24" />`
        : nothing}
    </li>`;
  }

  render() {
    return html`
      <nav aria-label=${msg("Mobile Navigation")}>
        <ul class="nav">
          ${map(portalState.navigation, this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${map(
              userSettingsItems(portalState.locale),
              this.renderSettingsItem.bind(this),
            )}
          </ul>
          <bkd-language-switcher></bkd-language-switcher>
        </div>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-mobile-nav": MobileNav;
  }
}
