import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { theme } from "../../utils/theme";
import { NavigationGroup } from "../../settings";

@customElement("bkd-nav-group-dropdown")
@localized()
export class NavGroupDropdown extends LitElement {
  @property()
  group?: NavigationGroup;

  static styles = [theme, css``];

  render() {
    if (!this.group) return;

    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-group-dropdown": NavGroupDropdown;
  }
}
