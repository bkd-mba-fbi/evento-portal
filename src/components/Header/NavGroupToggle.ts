import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { theme } from "../../utils/theme";
import { NavigationGroup } from "../../settings";
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

  private toggle(event: Event) {
    event.preventDefault();
    this.groupMenu.toggle();
  }

  private handleItemClick() {
    this.groupMenu.close();
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
      <bkd-nav-group-dropdown
        .group=${this.group}
        .open=${this.groupMenu.open}
        @bkditemclick=${this.handleItemClick.bind(this)}
      ></bkd-nav-group-dropdown>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-toggle": NavGroupToggle;
  }
}
