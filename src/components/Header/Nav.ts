import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { map } from "lit/directives/map.js";
import { theme } from "../../utils/theme";
import { Navigation, NavigationGroup } from "../../settings";

@customElement("bkd-nav")
@localized()
export class Nav extends LitElement {
  @property() navigation: Navigation = [];

  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        display: flex;
        justify-content: end;
        gap: 4.375rem;
      }

      /* Medium screen */

      @media screen and (max-width: 1500px) {
        :host {
          gap: 3rem;
        }
      }
    `,
  ];

  private renderGroupToggle(group: NavigationGroup, active: boolean) {
    return html`
      <bkd-nav-group-toggle
        .group=${group}
        ?active=${active}
      ></bkd-nav-group-toggle>
    `;
  }

  render() {
    return map(this.navigation, (group, i) =>
      this.renderGroupToggle(group, i === 0 /* TODO*/)
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav": Nav;
  }
}
