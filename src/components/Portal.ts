import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { StateController } from "@lit-app/state";

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
import { settings } from "../settings.ts";
import { portalState } from "../state/portal-state.ts";

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    :root {
      ${customProperties}
    }
  `.toString()
);

// const { getLocale, setLocale } = configureLocalization({
//   sourceLocale,
//   targetLocales,
//   loadLocale: (locale) => import(/* @vite-ignore */ `/locales/${locale}.js`),
// });

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

  private oAuthClient = createOAuthClient();

  constructor() {
    super();

    new StateController(this, portalState);
    ensureAuthenticated(this.oAuthClient, this.getScopeFromState());
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("popstate", this.handleStateChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this.handleStateChange);
  }

  private handleStateChange = (event: PopStateEvent) => {
    activateTokenForScope(this.oAuthClient, event.state.scope);
  };

  private getScopeFromState(): string {
    const url = new URL(location.href);
    const app = url.searchParams.get("app");

    return (
      (app && settings.apps.find(({ key }) => key === app)?.scope) ||
      settings.apps[0].scope
    );
  }

  render() {
    return html`
      <bkd-header></bkd-header>
      <bkd-content></bkd-content>
      <bkd-footer></bkd-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal": Portal;
  }
}
