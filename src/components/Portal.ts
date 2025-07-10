import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { localized } from "@lit/localize";
import { StateController, Unsubscribe } from "@lit-app/state";
import { settings } from "../settings";
import { portalState } from "../state/portal-state";
import { tokenState } from "../state/token-state";
import {
  activateTokenForScope,
  createOAuthClient,
  initAuthentication,
  logout,
} from "../utils/auth";
import { getInitialLocale } from "../utils/locale";
import { getNavigationItemByAppPath } from "../utils/navigation";
import { getHash, getScopeFromUrl, updateHash } from "../utils/routing";
import {
  customProperties,
  fontFaces,
  registerLightDomStyles,
  theme,
} from "../utils/theme";
import "./Content";
import "./Footer";
import "./Header";

const oAuthClient = createOAuthClient();
const authReady = (async function () {
  // Start Authorization Code Flow with PKCE
  await initAuthentication(oAuthClient, getScopeFromUrl(), getInitialLocale());
  portalState.init();
})();

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    ${fontFaces}
    :root {
      ${customProperties}
    }
  `.toString(),
);

@customElement("bkd-portal")
@localized()
export class Portal extends LitElement {
  @state()
  authReady = false;

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

  private subscriptions: Array<Unsubscribe> = [];

  constructor() {
    super();

    authReady.then(() => (this.authReady = true));

    new StateController(this, portalState);
  }

  connectedCallback(): void {
    super.connectedCallback();

    portalState.initialized.then(() =>
      setTimeout(() => {
        // When all roles/permissions have been loaded and the current app does
        // not match the scope of the current token, activate a token for the
        // app's scope. This can be the case when previously authenticated as
        // another user and the current user has no access to the navigation
        // item from the redirect URL, hence is redirected to home (see
        // https://github.com/bkd-mba-fbi/evento-portal/issues/106).
        //
        // Also, escape the callstack with the `setTimeout`, to make sure we are
        // checking the scope after the `navigate` call in `handleLoginResult`
        // (which is also executed when the `initialized` promise is resolved).
        // Without the `setTimeout`, we would check the scope before it is set
        // correctly.
        if (tokenState.scope !== portalState.app.scope) {
          activateTokenForScope(
            oAuthClient,
            portalState.app.scope,
            portalState.locale,
          );
        }
      }),
    );

    this.subscriptions.push(
      portalState.subscribeScopeAndLocale(
        (scope, locale) => activateTokenForScope(oAuthClient, scope, locale),
        true,
      ),
    );
    this.subscriptions.push(
      portalState.subscribeInstanceName(this.updateTitle.bind(this)),
    );
    this.subscriptions.push(
      portalState.subscribeNavigationItem(this.updateTitle.bind(this)),
    );

    window.addEventListener("message", this.handleMessage);

    // When visiting the portal anew with an app path in URL hash, set
    // this as the initial app path
    const url = new URL(location.href);
    portalState.actualAppPath = url.hash;

    // For subsequent hash changes, update the state
    window.addEventListener("hashchange", this.handleHashChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.subscriptions.forEach((unsubscribe) => unsubscribe());
    window.removeEventListener("message", this.handleMessage);
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  /**
   * Update the document title based on the current state
   */
  private updateTitle(): void {
    const { instanceName, navigationItem: item } = portalState;
    const hasItem = item?.label && item?.key !== settings.navigationHome.key;
    document.title = hasItem
      ? [item?.label, instanceName].join(" ― ")
      : instanceName;
  }

  private handleMessage = ({ data, origin }: MessageEvent) => {
    if (origin !== window.location.origin) return;
    switch (data.type) {
      case "bkdAppPushState": {
        const url = data.args[2];
        this.updateUrlAndNavigationState(url, false);
        break;
      }
      case "bkdAppReplaceState": {
        const url = data.args[2];
        updateHash(getHash(url), true);
        break;
      }
      case "bkdAppHashChange": {
        const { url } = data;
        updateHash(getHash(url));
        break;
      }
    }
  };

  /**
   * When navigating between modules of the same app, be sure to update the
   * portal URL and navigation state
   */
  private updateUrlAndNavigationState(url: string, replaceHash: boolean) {
    const hash = getHash(url);
    updateHash(hash, replaceHash);

    const navigationItem = getNavigationItemByAppPath(
      portalState.navigation,
      hash,
    );
    if (
      navigationItem?.item?.key &&
      navigationItem.item.key !== portalState.navigationItemKey
    ) {
      portalState.actualAppPath = hash;
      portalState.navigationItemKey = navigationItem.item.key;
    } else {
      portalState.appPath = hash;
    }
  }

  /**
   * Update the iframe's appPath whenever the user changes the hash in
   * the portal URL
   */
  private handleHashChange(event: HashChangeEvent): void {
    const url = new URL(event.newURL);
    portalState.appPath = url.hash;
  }

  private handleLogout() {
    logout(oAuthClient);
  }

  render() {
    return html`
      ${when(
        this.authReady && tokenState.authenticated,
        () => html`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `,
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal": Portal;
  }
}
