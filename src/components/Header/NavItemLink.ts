import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { theme } from "../../utils/theme";
import { NavigationItem } from "../../settings";

@customElement("bkd-nav-item-link")
@localized()
export class NavItemLink extends LitElement {
  @property()
  item?: NavigationItem;

  static styles = [theme, css``];

  private handleClick(event: MouseEvent): void {
    event.preventDefault();
  }

  render() {
    if (!this.item) return;

    return html`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-nav-item-link": NavItemLink;
  }
}
