import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { localized } from "@lit/localize";
import { DropdownController } from "../../controllers/dropdown";
import { NavigationGroup } from "../../settings";
import { theme } from "../../utils/theme";
import { NavGroupDropdown } from "./NavGroupDropdown";

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

  @query("a")
  private toggleElement?: HTMLElement;

  @query("bkd-nav-group-dropdown")
  private menuElement?: NavGroupDropdown;

  private dropdown = new DropdownController(
    this,
    () => this.toggleElement ?? null,
    () =>
      this.menuElement?.shadowRoot?.querySelector<HTMLElement>(
        'ul[role="menu"]',
      ) ?? null,
    true,
    {
      queryItems: () =>
        this.menuElement?.shadowRoot?.querySelectorAll<HTMLElement>(
          "a[role='menuitem']",
        ) ?? null,
      queryFocused: () =>
        (this.menuElement?.shadowRoot?.activeElement ??
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
        href="#"
        @click=${this.toggle.bind(this)}
        class=${classMap({ active: Boolean(this.active) })}
        .ariaExpanded=${this.dropdown.open}
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
