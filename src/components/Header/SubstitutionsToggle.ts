import { css, html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { localized, msg } from "@lit/localize";

import { theme } from "../../utils/theme";
import { DropdownController } from "../../controllers/dropdown";
import { SubstitutionsDropdown } from "./SubstitutionsDropdown";
import { fetchCurrentSubstitutions, Substitution } from "../../utils/fetch";
import { getCurrentAccessToken } from "../../utils/storage";
import { getTokenPayload } from "../../utils/token";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import substitutionIcon from "../../assets/icons/substitution.svg?raw";
import caretIcon from "../../assets/icons/caret.svg?raw";
import closeSmallIcon from "../../assets/icons/close-small.svg?raw";
import { submit } from "../../utils/submit";

@customElement("bkd-substitutions-toggle")
@localized()
export class SubstitutionsToggle extends LitElement {
  @query("bkd-substitutions-dropdown")
  dropdownElement?: SubstitutionsDropdown;

  @state()
  availableSubstitutions: ReadonlyArray<Substitution> = [];

  @state()
  activeSubstitution: Substitution | null = null;

  static styles = [
    theme,
    css`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem;
        height: calc(
          32 / 16 * 1rem
        ); /* Fixed height to match notifications toggle */
        border: none;
        border-radius: calc(32 / 16 * 1rem);
        line-height: 1;
        background-color: var(--bkd-brand-dark-sand);
        color: var(--bkd-func-fg-black);
        cursor: pointer;
      }

      /* When substitution is active */
      button.active {
        background-color: var(--bkd-brand-red);
        color: var(--bkd-func-fg-white);
      }

      .label {
        font-size: calc(14 / 16 * 1rem);
        font-weight: 400;
        max-width: 40ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .icon {
        display: none;
      }
      .icon-caret {
        transform: rotate(0deg);
        transition: transform 100ms;
      }
      button.open .icon-caret {
        transform: rotate(180deg);
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        button {
          padding: 0;
          aspect-ratio: 1/1;
          border-radius: 50%;
        }
        button:not(.active) {
          background-color: transparent;
        }
        .icon {
          display: block;
        }
        .label,
        .icon-caret {
          display: none;
        }
      }
    `,
  ];

  private dropdown = new DropdownController(
    this,
    "substitutions-toggle",
    "substitutions-menu",
    {
      queryItems: () =>
        this.dropdownElement?.shadowRoot?.querySelectorAll<HTMLElement>(
          "a[role='menuitem']"
        ) ?? null,
      queryFocused: () =>
        (this.dropdownElement?.shadowRoot?.activeElement ??
          null) as HTMLElement | null,
    }
  );

  connectedCallback(): void {
    super.connectedCallback();

    this.fetch();
  }

  private async fetch(): Promise<void> {
    this.availableSubstitutions = await fetchCurrentSubstitutions();

    const activeId = this.getActiveSubstitutionId();
    this.activeSubstitution =
      this.availableSubstitutions.find((s) => s.Id === activeId) ?? null;
  }

  private getActiveSubstitutionId(): number | null {
    const token = getCurrentAccessToken();
    if (!token) return null;

    const { substitutionId } = getTokenPayload(token);
    return substitutionId ?? null;
  }

  private toggle(event: Event) {
    event.preventDefault();

    if (this.activeSubstitution && this.isLargeScreen()) {
      // Stop active substitution just on toggle click on large screens
      this.stopSubstitution();
    } else {
      // Open/close dropdown
      this.dropdown.toggle();
    }
  }

  private isLargeScreen(): boolean {
    return window.innerWidth > 1200;
  }

  private startSubstitution(substitution: Substitution): void {
    if (this.activeSubstitution) return;

    // Redirect to backend to get a new access token with the substitution's roles/permissions.
    // Details see: https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Stellvertretung/Stellvertretung-Token/#stellvertretung-starten
    this.redirect(
      `${window.eventoPortal.settings.oAuthServer}/OAuth/Authorization/Substitutions/${substitution.Id}/start`
    );
  }

  private stopSubstitution(): void {
    if (!this.activeSubstitution) return;

    // Redirect to backend to get access token with the user's
    // original roles/permissions, not the substitution's ones.
    // Details see: https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Stellvertretung/Stellvertretung-Token/#stellvertretung-beenden
    this.redirect(
      `${window.eventoPortal.settings.oAuthServer}/OAuth/Authorization/Substitutions/${this.activeSubstitution.Id}/stop`
    );
  }

  private redirect(url: string): void {
    submit("POST", url, {
      access_token: getCurrentAccessToken() ?? "",
      redirect_uri: location.href,
    });
  }

  private handleSubstitutionStart(
    event: CustomEvent<{ substitution: Substitution }>
  ): void {
    this.dropdown.close();
    this.startSubstitution(event.detail.substitution);
  }

  private handleSubstitutionStop(): void {
    this.dropdown.close();
    this.stopSubstitution();
  }

  private getLabel(): string {
    return this.activeSubstitution?.Holder || msg("Stellvertretung ausüben");
  }

  render() {
    if (this.availableSubstitutions.length === 0) return;

    return html`
      <button
        id="substitutions-toggle"
        class=${classMap({
          active: Boolean(this.activeSubstitution),
          open: this.dropdown.open,
        })}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${unsafeHTML(substitutionIcon)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${unsafeHTML(this.activeSubstitution ? closeSmallIcon : caretIcon)}
        </div>
      </button>
      <bkd-substitutions-dropdown
        .availableSubstitutions=${this.availableSubstitutions}
        .activeSubstitution=${this.activeSubstitution}
        .open=${this.dropdown.open}
        @bkdsubstitutionstart=${this.handleSubstitutionStart.bind(this)}
        @bkdsubstitutionstop=${this.handleSubstitutionStop.bind(this)}
        @bkdclose=${() => this.dropdown.close()}
      ></bkd-substitutions-dropdown>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-substitutions-toggle": SubstitutionsToggle;
  }
}
