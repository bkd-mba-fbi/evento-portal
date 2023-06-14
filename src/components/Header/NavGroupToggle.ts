import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { theme } from "../../utils/theme";
import { NavigationGroup, NavigationItem } from "../../settings";
import { map } from "lit/directives/map.js";

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
        weight: 300;
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

  private renderItem(item: NavigationItem) {
    // TODO hide nav item/group if no permission
    return html`<li role="presentation">
      <a role="menuitem" href=${item.appPath}>${msg(item.label)}</a>
    </li>`;
  }

  render() {
    if (!this.group) return;

    return html`
      <a
        href="#"
        @click=${(e: MouseEvent) => e.preventDefault()}
        class=${classMap({ active: Boolean(this.active) })}
      >
        ${this.group.label}
      </a>
      <ul role="menu">
        ${map(this.group.items, this.renderItem)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-toggle": NavGroupToggle;
  }
}
