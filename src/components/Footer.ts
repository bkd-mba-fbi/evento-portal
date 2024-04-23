import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { NavigationItem, settings } from "../settings";
import { portalState } from "../state/portal-state";
import { buildUrl } from "../utils/routing";
import { theme } from "../utils/theme";

@customElement("bkd-footer")
@localized()
export class Footer extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-large);
        --bkd-footer-padding-vertical: 18px;

        padding: var(--bkd-footer-padding-vertical)
          var(--bkd-footer-padding-horizontal);
        border-top: 1px solid var(--bkd-footer-border);
        background-color: var(--bkd-brand-light-sand);
        color: var(--bkd-func-fg-black);
      }

      footer {
        display: flex;
        justify-content: space-between;
      }

      .copyright {
        font-size: 0.8125rem;
        font-weight: 300;
        letter-spacing: 0.02rem;
        word-spacing: 0.05rem;
      }

      .footer-nav {
        display: flex;
        gap: 2.5rem;
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        line-height: 1.5;
        color: var(--bkd-func-fg-black);
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-func-fg-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      a:hover::after,
      a:focus::after,
      a:active::after {
        transform: scaleX(1);
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-medium);
        }

        footer {
          flex-direction: column-reverse;
          gap: 1.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  private renderFooterLink(item: NavigationItem) {
    const url = buildUrl(item);
    return html`
      <a
        href=${url}
        @click=${(event: MouseEvent) => {
          event?.preventDefault();
          portalState.navigate(new URL(url));
        }}
        >${item.label}</a
      >
    `;
  }

  render() {
    return html`
      <footer role="contentinfo">
        <div class="copyright">${msg("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${repeat(
            settings.footer,
            (item) => item.key,
            this.renderFooterLink.bind(this),
          )}
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-footer": Footer;
  }
}
