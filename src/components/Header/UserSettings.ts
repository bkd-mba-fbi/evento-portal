import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-user-settings")
@localized()
export class UserSettings extends LitElement {
  @property()
  currentLocale = "de";

  static styles = [
    theme,
    css`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      ul {
        display: none;
        position: absolute;
        border: 1px solid var(--bkd-func-bg-grey);
        list-style-type: none;
        padding: 0.625rem 0;
        margin-top: 32px;
        background: var(--bkd-func-bg-white);
        z-index: 1;
      }

      li {
        font-size: 0.875rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        font-style: normal;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        text-decoration: none;
        line-height: 2.5;
        margin: 0 1.5rem;
      }
    `,
  ];

  menu() {
    return html`<ul>
      <li>Mein Profil</li>
      <li>Einstellungen</li>
      <li>Video-Tutorials</li>
      <li>Logout</li>
    </ul>`;
  }

  render() {
    const icon = "/icons/settings.svg";

    return html`
      <button type="button" aria-label=${msg("Menü Benutzereinstellungen")}>
        <img src=${icon} alt="" width="32" height="32" />
      </button>
      ${this.menu()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
