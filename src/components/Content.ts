import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../utils/theme";
import { map } from "lit/directives/map.js";
import { settings, SettingsApp } from "../settings";

@customElement("bkd-content")
@localized()
export class Content extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        margin: 0 var(--bkd-header-margin-horizontal);
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  private handleAppClick(event: MouseEvent, app: SettingsApp): void {
    event.preventDefault();
    const url = new URL(location.href);
    url.searchParams.set("app", app.key);
    history.pushState({}, "", url);
    window.dispatchEvent(
      new PopStateEvent("popstate", { state: app, bubbles: true })
    );
  }

  private renderAppLink(app: SettingsApp) {
    return html` <li>
      <a href="#" @click=${(e: MouseEvent) => this.handleAppClick(e, app)}>
        ${app.key} (${app.scope})
      </a>
    </li>`;
  }

  render() {
    return html`
      <main>
        <p>${msg("Willkommen bei Evento")}</p>
        <ul>
          ${map(settings.apps, this.renderAppLink.bind(this))}
        </ul>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-content": Content;
  }
}
