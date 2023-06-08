import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { map } from "lit/directives/map.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { theme } from "../../utils/theme";
import { NavigationGroup, NavigationItem, settings } from "../../settings";
import arrowDownIcon from "../../assets/icons/arrow-down.svg?raw";
import arrowUpIcon from "../../assets/icons/arrow-up.svg?raw";

@customElement("bkd-mobile-nav")
@localized()
export class MobileNav extends LitElement {
  @state()
  openGroup: NavigationGroup | null = settings.navigation[0];

  @state()
  activeItem: NavigationItem = settings.navigation[0].items[0];

  static styles = [
    theme,
    css`
      :host {
        position: absolute;
        width: 100vw;
        left: 0;
        top: calc(100% + 1px); /* Place right below header */
        height: calc(100vh - 100% - 1px);
        display: flex;
        flex-direction: column;
        background-color: var(--bkd-func-bg-white);
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
    `,
  ];

  private handleGroupClick(event: MouseEvent, group: NavigationGroup): void {
    event.preventDefault();
    this.openGroup = group.label !== this.openGroup?.label ? group : null;
  }

  private handleItemClick(event: MouseEvent, item: NavigationItem): void {
    event.preventDefault();
    this.activeItem = item;
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
          ${map(group.items, this.renderItem.bind(this))}
        </ul>
      </li>
    `;
  }

  private renderItem(item: NavigationItem) {
    const active = item.key === this.activeItem.key;
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
        ${map(settings.navigation, this.renderGroup.bind(this))}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-mobile-nav": MobileNav;
  }
}
