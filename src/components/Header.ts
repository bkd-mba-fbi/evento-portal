import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";

import { theme } from "../utils/theme";
import { DropdownToggleController } from "../controllers/dropdown-toggle";
import { when } from "lit/directives/when.js";
import { portalState } from "../state/portal-state";
import { StateController } from "@lit-app/state";
import { getUrl } from "../utils/routing";

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

  private mobileNav = new DropdownToggleController(
    this,
    "mobile-nav-toggle",
    "mobile-nav-menu"
  );

  private handleLogoClick(event: MouseEvent) {
    event.preventDefault();
    portalState.navigationItemKey = "home";
  }

  render() {
    const instanceName = "Berufsbildungszentrum IDM Thun";
    const portalName = `${msg("Evento")} | ${instanceName}`;

    return html`
      <header>
        <bkd-service-nav
          .mobileNavOpen=${this.mobileNav.open}
          @bkdhamburgertoggle=${() => this.mobileNav.toggle()}
        ></bkd-service-nav>
        <a class="logo" href=${getUrl("home")}
          ><img
            src="logo.svg"
            alt=${msg("Evento Startseite")}
            @click=${this.handleLogoClick.bind(this)}
        /></a>
        <div class="logo-caption">${portalName}</div>
        <bkd-nav></bkd-nav>
        ${when(
          this.mobileNav.open,
          () => html`<bkd-mobile-nav id="mobile-nav-menu"></bkd-mobile-nav>`
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
