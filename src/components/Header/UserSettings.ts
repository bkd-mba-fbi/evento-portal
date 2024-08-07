import { LitElement, css, html, nothing } from "lit";
import { customElement, query } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { DropdownController } from "../../controllers/dropdown";
import { portalState } from "../../state/portal-state";
import { theme } from "../../utils/theme";
import { UserSettingsItem, userSettingsItems } from "../../utils/user-settings";

@customElement("bkd-user-settings")
@localized()
export class UserSettings extends LitElement {
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
        padding: 1rem 0;
        list-style-type: none;
        margin-top: calc(32px + 0.5rem);
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: max-content;
      }

      li {
        padding: 0 1.5rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 36px;
      }

      li.selected {
        color: var(--bkd-brand-red);
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        font-weight: 700;
        padding: 0 calc(1.5rem - 6px);
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        margin-top: 2px;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a:hover::after,
      a:focus::after {
        transform: scaleX(1);
      }
    `,
  ];

  @query("button")
  private toggleElement?: HTMLElement;

  @query('ul[role="menu"]')
  private menuElement?: HTMLElement;

  private dropdown = new DropdownController(this, {
    queryToggleElement: () => this.toggleElement ?? null,
    queryMenuElement: () => this.menuElement ?? null,
    queryItems: () =>
      this.shadowRoot?.querySelectorAll<HTMLElement>("a[role='menuitem']") ??
      null,
    queryFocused: () =>
      (this.shadowRoot?.activeElement ?? null) as HTMLElement | null,
  });

  constructor() {
    super();
    new StateController(this, portalState);
  }

  private handleSettingsItemClick(event: MouseEvent, item: UserSettingsItem) {
    this.dropdown.close();

    this.dispatchEvent(
      new CustomEvent<{ item: UserSettingsItem; event: Event }>(
        "bkdsettingsitemclick",
        {
          detail: { item, event },
          composed: true,
          bubbles: true,
        },
      ),
    );
  }

  private renderSettingsItem(item: UserSettingsItem) {
    return html`<li role="presentation">
      <a
        role="menuitem"
        href=${item.href}
        target=${item.external ? "_blank" : "_self"}
        @click=${(e: MouseEvent) => this.handleSettingsItemClick(e, item)}
      >
        ${item.label}</a
      >
      ${item.img
        ? html`<img src=${item.img} alt="" width="24" height="24" />`
        : nothing}
    </li>`;
  }

  render() {
    return html`
      <button
        type="button"
        @click=${() => this.dropdown.toggle()}
        aria-label=${msg("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${map(
          userSettingsItems(portalState.locale),
          this.renderSettingsItem.bind(this),
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-user-settings": UserSettings;
  }
}
