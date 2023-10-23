import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

import { theme } from "../../utils/theme";
import { NavigationGroup } from "../../settings";
import { DropdownController } from "../../controllers/dropdown";
import { NavGroupDropdown } from "./NavGroupDropdown";

@customElement("bkd-nav-group-toggle")
@localized()
export class NavGroupToggle extends LitElement {
  @query("bkd-nav-group-dropdown")
  dropdownElement?: NavGroupDropdown;

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

  private dropdown = new DropdownController(
    this,
    "group-toggle",
    "group-menu",
    {
      queryItems: () =>
        this.dropdownElement?.shadowRoot?.querySelectorAll<HTMLElement>(
          "a[role='menuitem']",
        ) ?? null,
      queryFocused: () =>
        (this.dropdownElement?.shadowRoot?.activeElement ??
          null) as HTMLElement | null,
    },
  );

  private toggle(event: Event) {
    event.preventDefault();
    this.dropdown.toggle();
  }

  private handleItemClick() {
    this.dropdown.close();
  }

  render() {
    if (!this.group) return;

    return html`
      <a
        id="group-toggle"
        href="#"
        @click=${this.toggle.bind(this)}
        class=${classMap({ active: Boolean(this.active) })}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        ${this.group.label}
      </a>
      <bkd-nav-group-dropdown
        .group=${this.group}
        .open=${this.dropdown.open}
        @bkdnavitemclick=${this.handleItemClick.bind(this)}
      ></bkd-nav-group-dropdown>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-toggle": NavGroupToggle;
  }
}
