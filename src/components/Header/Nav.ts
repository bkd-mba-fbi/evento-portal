import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { NavigationGroup } from "../../settings";
import { portalState } from "../../state/portal-state";
import { theme } from "../../utils/theme";

@customElement("bkd-nav")
@localized()
export class Nav extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      nav {
        display: flex;
        justify-content: end;
        gap: 4.375rem;
      }

      /* Medium screen */

      @media screen and (max-width: 1500px) {
        nav {
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
    return html`<nav role="navigation" aria-label=${msg("Hauptnavigation")}>
      ${repeat(
        portalState.navigation,
        (group) => group.label,
        (group) =>
          this.renderGroupToggle(
            group,
            group.label === portalState.navigationGroup?.label,
          ),
      )}
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav": Nav;
  }
}
