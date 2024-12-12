import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";
import { keyed } from "lit/directives/keyed.js";
import { when } from "lit/directives/when.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { portalState } from "../state/portal-state";
import { tokenState } from "../state/token-state";
import { theme } from "../utils/theme";
import "./unrestricted/content/Contact";
import "./unrestricted/content/Imprint";
import "./unrestricted/content/Legal";

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
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
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

  private renderedOffline = false;

  constructor() {
    super();
    new StateController(this, portalState);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this.handleMessage);
    window.addEventListener("online", this.handleOnline);
  }

  disconnectedCallback() {
    window.removeEventListener("message", this.handleMessage);
    window.removeEventListener("online", this.handleOnline);
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

  private handleOnline = () => {
    // Reload the app when we went online and offline page is rendered
    if (this.renderedOffline) {
      window.location.reload();
    }
  };

  private handleResize(height: string): void {
    if (this.iframe) {
      this.iframe.height = height;
    }
  }

  private renderAppIframe() {
    return html`${keyed(
      portalState.app.root,
      html`
        <iframe
          id="app"
          title=${portalState.app.key}
          src=${`/${portalState.app.root}${portalState.appPath}`}
        ></iframe>
      `,
    )}`;
  }

  private renderFooterContent() {
    return html`
      ${choose(
        portalState.navigationItemKey,
        [
          ["contact", () => html`<bkd-contact></bkd-contact>`],
          ["legal", () => html`<bkd-legal></bkd-legal>`],
          ["imprint", () => html`<bkd-imprint></bkd-imprint>`],
        ],
        () => html``,
      )}
    `;
  }

  render() {
    this.renderedOffline = !navigator.onLine;
    if (!navigator.onLine) {
      // Show message when offline
      return html`<main role="main">
        <h1>${msg("Offline")}</h1>
        <p>${msg("Keine Verbindung vorhanden.")}</p>
      </main>`;
    }

    if (tokenState.scope !== portalState.app.scope) {
      // Token scope does not match current app, wait for correct
      // token to be activated in <Portal> component to avoid requests
      // resulting in 403 due to unsufficient rights.
      return html`<main role="main"></main>`;
    }

    // The keyed directive ensures that the entire iframe and any
    // associated scripts are removed when the application changes.
    return html`
      <main role="main">
        ${when(
          portalState.app.heading,
          () => html`<h1>${portalState.navigationItem.label}</h1>`,
        )}
        ${when(
          portalState.app.key === "footer",
          () => this.renderFooterContent(),
          () => this.renderAppIframe(),
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
