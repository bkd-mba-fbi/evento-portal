import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { theme } from "../../utils/theme";
import { NavigationGroup, NavigationItem } from "../../settings";
import { map } from "lit/directives/map.js";
import { portalState } from "../../state/portal-state";
import { StateController } from "@lit-app/state";
import { classMap } from "lit/directives/class-map.js";
import { buildUrl } from "../../utils/routing";

@customElement("bkd-nav-group-dropdown")
@localized()
export class NavGroupDropdown extends LitElement {
  @property()
  group?: NavigationGroup;

  @property()
  open = false;

  static styles = [
    theme,
    css`
      :host {
        position: relative;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        margin: 0.5rem 0;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: max-content;
      }

      li {
        padding: 0 1.5rem;
        height: 100%;
        line-height: 2.5;
      }

      li.active {
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        padding: 0 calc(1.5rem - 6px);
      }

      li.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.active a:after {
        background-color: transparent;
      }

      a {
        font-size: 1.125rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active:after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active:after {
        transform: scaleX(1);
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  private handleItemClick(event: MouseEvent, item: NavigationItem) {
    event.preventDefault();
    this.dispatchEvent(
      new CustomEvent<{ item: NavigationItem }>("bkdnavitemclick", {
        detail: { item },
        composed: true,
        bubbles: true,
      })
    );
  }

  private renderItem(item: NavigationItem) {
    const active = item.key === portalState.navigationItemKey;
    return html`
      <li role="presentation" class=${classMap({ active })}>
        <a
          role="menuitem"
          href=${buildUrl(item)}
          @click=${(e: MouseEvent) => this.handleItemClick(e, item)}
          >${item.label}</a
        >
      </li>
    `;
  }

  render() {
    if (!this.group || !this.open) return;

    return html`
      <ul role="menu" id="group-menu">
        ${map(this.group.items, this.renderItem.bind(this))}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-dropdown": NavGroupDropdown;
  }
}
