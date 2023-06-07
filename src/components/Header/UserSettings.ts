import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-user-settings")
@localized()
export class UserSettings extends LitElement {
  @property()
  currentLocale = "de";

  @state()
  protected _open = false;

  static styles = [
    theme,
    css`
      :host {
        display: flex;
        position: relative;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        list-style-type: none;
        padding: 0.625rem 0;
        margin-top: calc(32px + 0.5rem);
        background: var(--bkd-func-bg-white);
        z-index: 1;
        min-width: 10rem;
      }

      a {
        font-size: 0.875rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.5;
        padding: 0 1.5rem;
        display: inline-block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: var(--bkd-func-fg-black);
      }

      a:hover {
        color: var(--bkd-brand-red);
        background: var(--bkd-brand-light-sand);
        border-left: 6px solid var(--bkd-brand-red);
        font-weight: 700;
        padding: 0 calc(1.5rem - 6px);
      }
    `,
  ];

  menuItems() {
    const playlist =
      this.currentLocale === "de"
        ? "PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf"
        : "PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU";

    return html`
      <li><a href="">${msg("Mein Profil")}</a></li>
      <li><a href="">${msg("Einstellungen")}</a></li>
      <li>
        <a
          href=${`https://www.youtube.com/playlist?list=${playlist}`}
          target="_blank"
          >${msg("Video-Tutorials")}</a
        >
      </li>
      <li><a href="">${msg("Logout")}</a></li>
    `;
  }

  render() {
    const icon = "/icons/settings.svg";

    return html`
      <button
        type="button"
        @click=${() => this.toggleMenu()}
        aria-label=${msg("Menü Benutzereinstellungen")}
      >
        <img src=${icon} alt="" width="32" height="32" />
      </button>
      <ul ?hidden=${!this._open}>
        ${this.menuItems()}
      </ul>
    `;
  }

  private toggleMenu() {
    this._open = !this._open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
