import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { map } from "lit/directives/map.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { theme } from "../../utils/theme";
import { Navigation, NavigationGroup, NavigationItem } from "../../settings";
import arrowDownIcon from "../../assets/icons/arrow-down.svg?raw";
import arrowUpIcon from "../../assets/icons/arrow-up.svg?raw";

@customElement("bkd-mobile-nav")
@localized()
export class MobileNav extends LitElement {
  @property()
  navigation: Navigation = [];
  @property()
  currentLocale = "de";

  @state()
  openGroup: NavigationGroup | null = null;

  @state()
  currentItem: NavigationItem | null = null;

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
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    `,
  ];

  private handleGroupClick(event: MouseEvent, group: NavigationGroup): void {
    event.preventDefault();
    this.openGroup = group !== this.openGroup ? group : null;
  }

  private handleItemClick(event: MouseEvent, item: NavigationItem): void {
    event.preventDefault();
    // TODO: perform actual navigation action
    this.currentItem = item;
  }

  private renderGroup(group: NavigationGroup) {
    const open = group === (this.openGroup ?? this.navigation[0]);
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
          ${map(group.items, this.renderItem.bind(this))}
        </ul>
      </li>
    `;
  }

  private renderItem(item: NavigationItem) {
    const active = Boolean(
      this.currentItem && item.key === this.currentItem.key
    );
    return html`
      <li
        class=${classMap({
          item: true,
          active,
        })}
      >
        <a href="#" @click=${(e: MouseEvent) => this.handleItemClick(e, item)}>
          ${item.label}
        </a>
      </li>
    `;
  }

  render() {
    return html`
      <ul class="nav">
        ${map(this.navigation, this.renderGroup.bind(this))}
      </ul>
      <div class="service-nav">
        <ul>
          <li role="presentation">TODO</li>
          <li role="presentation">TODO</li>
          <li role="presentation">TODO</li>
          <li role="presentation">TODO</li>
        </ul>
        <bkd-language-switcher
          currentLocale=${this.currentLocale}
        ></bkd-language-switcher>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-mobile-nav": MobileNav;
  }
}
