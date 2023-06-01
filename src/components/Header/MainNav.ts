import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { theme } from "../../utils/theme";

@customElement("bkd-main-nav")
@localized()
export class MainNav extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        background-color: salmon;
      }
    `,
  ];

  render() {
    return html` <span style="font-size: 2rem">main nav</span> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-main-nav": MainNav;
  }
}
