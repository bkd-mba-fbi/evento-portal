import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { StateController, Unsubscribe } from "@lit-app/state";

import {
  customProperties,
  registerLightDomStyles,
  theme,
} from "../utils/theme.ts";
import {
  activateTokenForScope,
  createOAuthClient,
  ensureAuthenticated,
} from "../utils/auth.ts";
import { portalState } from "../state/portal-state.ts";
import { getScopeFromUrl } from "../utils/routing.ts";
import { when } from "lit/directives/when.js";
import { getCurrentAccessToken } from "../utils/storage.ts";

const oAuthClient = createOAuthClient();

(async function () {
  // Start Authorization Code Flow with PKCE
  await ensureAuthenticated(oAuthClient, getScopeFromUrl());
  portalState.init();
})();

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    :root {
      ${customProperties}
    }
  `.toString()
);

@customElement("bkd-portal")
@localized()
export class Portal extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content {
        flex: auto;
      }
    `,
  ];

  private unsubscribeScope: Unsubscribe | null = null;

  constructor() {
    super();

    new StateController(this, portalState);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribeScope = portalState.subscribeScope(
      (scope) => activateTokenForScope(oAuthClient, scope),
      false
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.unsubscribeScope) {
      this.unsubscribeScope();
    }
  }

  private isAuthenticated(): boolean {
    const token = getCurrentAccessToken();
    return Boolean(token);
  }

  render() {
    return html`
      ${when(
        this.isAuthenticated(),
        () => html`
          <bkd-header></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal": Portal;
  }
}
