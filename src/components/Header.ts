import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";

import { theme } from "../utils/theme";
import { DropdownController } from "../controllers/dropdown";
import { when } from "lit/directives/when.js";
import { portalState } from "../state/portal-state";
import { StateController } from "@lit-app/state";
import { buildUrl } from "../utils/routing";
import { NavigationItem } from "../settings";
import { UserSettingsItem } from "../utils/user-settings";

@customElement("bkd-header")
@localized()
export class Header extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-header-margin-top: 12px;
        --bkd-header-margin-bottom: calc(2 * var(--bkd-header-margin-top));
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        position: relative;
        padding: var(--bkd-header-margin-top)
          var(--bkd-header-margin-horizontal) var(--bkd-header-margin-bottom)
          var(--bkd-header-margin-horizontal);
        border-bottom: 1px solid var(--bkd-func-bg-grey);
      }

      header {
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-areas:
          "service-nav service-nav"
          "logo ."
          "logo-caption nav";
      }

      bkd-service-nav {
        grid-area: service-nav;
        justify-self: end;
      }

      .logo {
        grid-area: logo;
      }

      .logo > img {
        width: 150px;
      }

      .logo-caption {
        grid-area: logo-caption;
        align-self: baseline;
        max-width: 21rem;
      }

      bkd-nav {
        grid-area: nav;
        align-self: baseline;
        justify-self: end;
      }

      /* Hide mobile nav on large screens */
      @media screen and (min-width: 1201px) {
        bkd-mobile-nav {
          display: none;
        }
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        header {
          grid-template-areas:
            "logo service-nav"
            "logo-caption logo-caption";
        }

        bkd-service-nav {
          align-self: center;
        }

        .logo > img {
          width: 110px;
        }

        .logo-caption {
          margin-top: 12px;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 0.75rem;
          max-width: 13.125rem;
        }

        bkd-nav {
          display: none;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }

        bkd-service-nav {
          align-self: start;
          margin-top: 2px; /* Align with logo text */
        }
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  private mobileNav = new DropdownController(
    this,
    "mobile-nav-toggle",
    "mobile-nav-menu"
  );

  private handleLogoClick(event: MouseEvent) {
    event.preventDefault();
    portalState.navigationItemKey = "home";
  }

  private handleNavItemClick(
    event: CustomEvent<{ item: NavigationItem }>
  ): void {
    const { item } = event.detail;

    // Navigate to clicked item
    portalState.navigationItemKey = item.key;

    // When on mobile, close hamburger menu
    this.mobileNav.close();
  }

  private handleSettingsItemClick(
    event: CustomEvent<{ item: UserSettingsItem; event: Event }>
  ): void {
    const { item, event: sourceEvent } = event.detail;

    if (!item.external) {
      sourceEvent.preventDefault();
      if (item.key === "logout") {
        this.dispatchEvent(
          new CustomEvent<void>("bkdlogout", { composed: true, bubbles: true })
        );
      } else {
        // Internal navigation
        portalState.navigationItemKey = item.key;
      }
    }

    // When on mobile, close hamburger menu
    this.mobileNav.close();
  }

  render() {
    return html`
      <header>
        <bkd-service-nav
          .mobileNavOpen=${this.mobileNav.open}
          @bkdhamburgertoggle=${() => this.mobileNav.toggle()}
          @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
        ></bkd-service-nav>
        <a class="logo" href=${buildUrl("home")}
          ><img
            src="logo.svg"
            alt=${msg("Evento Startseite")}
            @click=${this.handleLogoClick.bind(this)}
        /></a>
        <div class="logo-caption">${portalState.instanceName}</div>
        <bkd-nav
          @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
        ></bkd-nav>
        ${when(
          this.mobileNav.open,
          () =>
            html`<bkd-mobile-nav
              id="mobile-nav-menu"
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`
        )}
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-header": Header;
  }
}
