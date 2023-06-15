import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { theme } from "../../utils/theme";
import { NavigationGroup, NavigationItem } from "../../settings";
import { map } from "lit/directives/map.js";
import { DropdownToggleController } from "../../controllers/dropdown-toggle.ts";

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
      a {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        height: 36px;
        line-height: 1.5;
        /*
          margin: 0 calc(1.1vw + 12px) 0 calc(1.1vw + 12px);
         */
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

  private renderItem(item: NavigationItem) {
    // TODO hide nav item/group if no permission
    return html`<li role="presentation">
      <a
        role="menuitem"
        href=${item.appPath}
        @click=${(e: MouseEvent) => this.handleItemClick(e, item)}
        >${msg(item.label)}</a
      >
    </li>`;
  }

  private toggle() {
    this.groupMenu.toggle();
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

  private handleItemClick(e: MouseEvent, item: NavigationItem) {
    e.preventDefault();
    console.log("handleItemClick", item); // TODO: perform actual navigation action
    this.groupMenu.close();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-toggle": NavGroupToggle;
  }
}
