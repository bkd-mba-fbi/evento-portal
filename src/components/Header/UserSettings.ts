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
    `,
  ];

  render() {
    const icon = "/icons/settings.svg";

    return html`<button
      type="button"
      aria-label=${msg("Menü Benutzereinstellungen")}
    >
      <img src=${icon} alt="" width="32" height="32" />
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
