import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { theme } from "../../utils/theme";
import { allLocales } from "../../locales";
import { classMap } from "lit/directives/class-map.js";

@customElement("bkd-language-switcher")
@localized()
export class LanguageSwitcher extends LitElement {
  @property()
  currentLocale = "de";

  static styles = [
    theme,
    css`
      :host {
        font-size: 0.875rem;
      }

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

  private handleLocaleChange(event: MouseEvent, locale: string): void {
    event.preventDefault();
    this.dispatchEvent(
      new CustomEvent("bkdlocalechange", {
        bubbles: true,
        composed: true,
        detail: { locale },
      })
    );
  }

  render() {
    return html`<ul>
      ${allLocales.map(
        (locale) =>
          html`<li>
            <a
              href="#"
              class=${classMap({ active: locale === this.currentLocale })}
              aria-current=${locale === this.currentLocale}
              @click=${(event: MouseEvent) =>
                this.handleLocaleChange(event, locale)}
            >
              ${locale}
            </a>
          </li>`
      )}
    </ul>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-language-switcher": LanguageSwitcher;
  }
}
