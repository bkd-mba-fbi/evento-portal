import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { localized } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { allLocales } from "../../locales";
import { portalState } from "../../state/portal-state";
import { theme } from "../../utils/theme";

@customElement("bkd-language-switcher")
@localized()
export class LanguageSwitcher extends LitElement {
  static styles = [
    theme,
    css`
      ul {
        display: flex;
        align-items: baseline;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: flex;
        align-items: baseline;
        margin-left: 0.75rem;
      }

      li + li:before {
        content: "|";
        margin-right: 0.75rem;
      }

      a {
        display: block;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.025rem;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--bkd-func-fg-black);
      }

      a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-func-fg-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      a.active {
        border-bottom: 2px solid var(--bkd-language-switcher-active-border);
      }

      a:hover::after,
      a:focus::after,
      a:active::after {
        transform: scaleX(1);
      }

      a.active:hover::after,
      a.active:focus::after,
      a.active:active::after {
        transform: scaleX(0);
      }
    `,
  ];

  constructor() {
    super();

    new StateController(this, portalState);
  }

  private handleLocaleChange(event: MouseEvent, locale: string): void {
    event.preventDefault();
    portalState.locale = locale;
  }

  render() {
    return html`<ul>
      ${allLocales.map(
        (locale) =>
          html`<li>
            <a
              href="#"
              class=${classMap({ active: locale === portalState.locale })}
              aria-current=${locale === portalState.locale}
              @click=${(event: MouseEvent) =>
                this.handleLocaleChange(event, locale)}
            >
              ${locale.slice(0, 2)}
            </a>
          </li>`,
      )}
    </ul>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-language-switcher": LanguageSwitcher;
  }
}
