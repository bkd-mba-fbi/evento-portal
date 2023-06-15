import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../utils/theme";
import { StateController } from "@lit-app/state";
import { portalState } from "../state/portal-state";

@customElement("bkd-content")
@localized()
export class Content extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        margin: 0 var(--bkd-header-margin-horizontal);
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  render() {
    return html`
      <main>
        <p>${portalState.navigationItem.label}</p>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-content": Content;
  }
}
