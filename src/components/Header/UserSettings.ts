import { css, html, LitElement } from "lit";
import {
  customElement,
  property,
  query,
  queryAll,
  state,
} from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-user-settings")
@localized()
export class UserSettings extends LitElement {
  @property()
  currentLocale = "de";

  @state()
  protected open = false;

  @query("button")
  private menuButton: any;
  @queryAll("a")
  private menuLinks: any;

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
        z-index: var(--bkd-z-index-dropdown);
        min-width: 12rem;
      }

      a {
        font-size: 0.875rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.5;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: var(--bkd-func-fg-black);
      }

      a img {
        margin-left: -5.25px;
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

  profile() {
    return html`<a href="#">${msg("Mein Profil")}</a>`;
  }

  settings() {
    return html`<a href="#">${msg("Einstellungen")}</a>`;
  }

  videos() {
    const playlist =
      this.currentLocale === "de"
        ? "PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf"
        : "PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU";

    return html`<a
      href=${`https://www.youtube.com/playlist?list=${playlist}`}
      target="_blank"
      ><img src="/icons/external-link.svg" alt="" width="24" height="24" />
      ${msg("Video-Tutorials")}</a
    >`;
  }

  logout() {
    return html`<a href="#"
      ><img src="/icons/logout.svg" alt="" width="24" height="24" />${msg(
        "Logout"
      )}</a
    >`;
  }

  render() {
    return html`
      <button
        type="button"
        @click=${() => this.toggle()}
        aria-label=${msg("Menü Benutzereinstellungen")}
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul ?hidden=${!this.open}>
        ${html`${[
          this.profile(),
          this.settings(),
          this.videos(),
          this.logout(),
        ].map((link) => html`<li>${link}</li>`)} `}
      </ul>
    `;
  }

  private toggle() {
    this.open = !this.open;
    if (this.open) {
      document.addEventListener("keydown", this.handleKeydown);
      document.addEventListener("click", this.handleClick);
    } else {
      document.removeEventListener("keydown", this.handleKeydown);
      document.removeEventListener("click", this.handleClick);
    }
  }

  private handleClick = (e: MouseEvent) => {
    const target = e.composedPath()[0];
    if (
      target !== this.menuButton &&
      !this.menuButton.contains(target) &&
      this.open
    ) {
      this.toggle();
    }
  };

  private activeLinkId(): number {
    const active = this.shadowRoot?.activeElement;
    return [...this.menuLinks].indexOf(active);
  }

  private nextLinkId(offset: number, start: number): number {
    const activeId = this.activeLinkId();
    return activeId + offset < 0
      ? start
      : (activeId + offset) % this.menuLinks.length;
  }

  private handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        this.toggle();
        break;
      case "ArrowDown":
        const nextId = this.nextLinkId(1, 0);
        this.menuLinks[nextId].focus();
        break;
      case "ArrowUp":
        const previousId = this.nextLinkId(-1, 3);
        this.menuLinks[previousId].focus();
        break;
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
