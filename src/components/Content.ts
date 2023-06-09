import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import { StateController } from "@lit-app/state";
import { portalState } from "../state/portal-state";
import { keyed } from "lit/directives/keyed.js";
import { localized } from "@lit/localize";
import { theme } from "../utils/theme";
import { when } from "lit/directives/when.js";

@customElement("bkd-content")
@localized()
export class Content extends LitElement {
  @query("iframe")
  private iframe?: HTMLIFrameElement;

  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-content-margin-top: 3rem;
        --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-large);
        padding: var(--bkd-content-margin-top)
          var(--bkd-content-margin-horizontal) 0
          var(--bkd-content-margin-horizontal);
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
        line-height: 2.25rem;
        margin: 0 0 calc(3.375rem / 2) 0;
      }

      iframe {
        border: none;
        width: 100%;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-content-margin-top: 2rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        h1 {
          font-size: 2.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-content-margin-top: 1rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this.handleMessage);
  }

  disconnectedCallback() {
    window.removeEventListener("message", this.handleMessage);
    super.disconnectedCallback();
  }

  private handleMessage = (event: MessageEvent) => {
    switch (event.data.type) {
      case "bkdAppResize": {
        this.handleResize(event.data.height);
        break;
      }
    }
  };

  private handleResize(height: string): void {
    if (this.iframe) {
      this.iframe.height = height;
    }
  }

  render() {
    // The keyed directive ensures that the entire iframe and any associated scripts are removed when the application changes.
    return html`
      <main>
        ${when(
          portalState.app.heading,
          () => html`<h1>${portalState.navigationItem.label}</h1>`
        )}
        ${keyed(
          portalState.app.root,
          html`
            <iframe
              id="app"
              title=${portalState.app.key}
              src=${portalState.app.root + portalState.appPath}
            ></iframe>
          `
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
