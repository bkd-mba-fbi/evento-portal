import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { theme } from "../../utils/theme";
import { NavigationGroup, NavigationItem } from "../../settings";
import { map } from "lit/directives/map.js";
import { DropdownToggleController } from "../../controllers/dropdown-toggle.ts";
import { portalState } from "../../state/portal-state.ts";

@customElement("bkd-nav-group-toggle")
@localized()
export class NavGroupToggle extends LitElement {
  @property()
  group?: NavigationGroup;

  @property({ type: Boolean })
  active?: boolean;

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

      li.selected {
        color: var(--bkd-brand-red);
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        font-weight: 700;
        padding: 0 calc(1.5rem - 6px);
      }

      a {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      #group-menu a {
        font-size: 1.125rem;
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

  private groupMenu = new DropdownToggleController(
    this,
    "group-toggle",
    "group-menu"
  );

  private toggle() {
    this.groupMenu.toggle();
  }

  private handleItemClick(event: MouseEvent, item: NavigationItem) {
    event.preventDefault();
    portalState.navigationItemKey = item.key;
    this.groupMenu.close();
  }

  private renderItem(item: NavigationItem) {
    return html`
      <li role="presentation">
        <a
          role="menuitem"
          href="#"
          @click=${(e: MouseEvent) => this.handleItemClick(e, item)}
          >${item.label}</a
        >
      </li>
    `;
  }

  render() {
    if (!this.group) return;

    return html`
      <a
        id="group-toggle"
        href="#"
        @click=${this.toggle.bind(this)}
        class=${classMap({ active: Boolean(this.active) })}
        aria-expanded=${this.groupMenu.open}
        aria-haspopup="menu"
      >
        ${this.group.label}
      </a>
      <ul role="menu" id="group-menu" ?hidden=${!this.groupMenu.open}>
        ${map(this.group.items, this.renderItem.bind(this))}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-toggle": NavGroupToggle;
  }
}
