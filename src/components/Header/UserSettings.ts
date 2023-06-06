import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "@lit/localize";

@customElement("bkd-user-settings")
@localized()
export class UserSettings extends LitElement {
  render() {
    return html`<div>Einstellungen</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
