import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { keyed } from "lit/directives/keyed.js";
import { localized } from "@lit/localize";
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
        display: flex;
        height: 100%;
      }

      main {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
      }

      iframe {
        border: none;
        height: 100%;
        width: 100%;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        h1 {
          font-size: 2.25rem;
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
        <h1>${portalState.navigationItem.label}</h1>
        ${keyed(
          portalState.app.root,
          html`<iframe
            id="app"
            src=${portalState.app.root + portalState.navigationItem.appPath}
          ></iframe>`
        )}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-content": Content;
  }
}
