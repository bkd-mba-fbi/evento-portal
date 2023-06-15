import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { map } from "lit/directives/map.js";
import { StateController } from "@lit-app/state";

import { theme } from "../../utils/theme";
import { NavigationGroup } from "../../settings";
import { portalState } from "../../state/portal-state";

@customElement("bkd-nav")
@localized()
export class Nav extends LitElement {
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

  constructor() {
    super();
    new StateController(this, portalState);
  }

  private renderGroupToggle(group: NavigationGroup, active: boolean) {
    return html`
      <bkd-nav-group-toggle
        .group=${group}
        ?active=${active}
      ></bkd-nav-group-toggle>
    `;
  }

  render() {
    return map(portalState.navigation, (group) =>
      this.renderGroupToggle(
        group,
        group.label === portalState.navigationGroup?.label
      )
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav": Nav;
  }
}
