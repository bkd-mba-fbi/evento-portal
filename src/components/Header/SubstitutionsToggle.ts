import { LitElement, css, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import caretIcon from "../../assets/icons/caret.svg?raw";
import closeSmallIcon from "../../assets/icons/close-small.svg?raw";
import substitutionIcon from "../../assets/icons/substitution.svg?raw";
import { DropdownController } from "../../controllers/dropdown";
import { getEnvSettings } from "../../env-settings.ts";
import { tokenState } from "../../state/token-state.ts";
import { Substitution, fetchCurrentSubstitutions } from "../../utils/fetch";
import { buildUrl } from "../../utils/routing.ts";
import { submit } from "../../utils/submit";
import { theme } from "../../utils/theme";
import { SubstitutionsDropdown } from "./SubstitutionsDropdown";

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
          "a[role='menuitem']",
        ) ?? null,
      queryFocused: () =>
        (this.dropdownElement?.shadowRoot?.activeElement ??
          null) as HTMLElement | null,
    },
  );

  connectedCallback(): void {
    super.connectedCallback();

    this.fetch();
  }

  private async fetch(): Promise<void> {
    const currentSubstitutions = await fetchCurrentSubstitutions();
    this.availableSubstitutions = currentSubstitutions
      .filter((substitution) => this.isNotInFuture(substitution))
      .sort((a, b) => a.Holder.localeCompare(b.Holder));

    const activeId = this.getActiveSubstitutionId();
    this.activeSubstitution =
      this.availableSubstitutions.find((s) => s.Id === activeId) ?? null;
  }

  private isNotInFuture(substitution: Substitution): boolean {
    return (
      !!substitution.DateFrom && new Date(substitution.DateFrom) <= new Date()
    );
  }

  private getActiveSubstitutionId(): number | null {
    return tokenState.accessTokenPayload?.substitutionId ?? null;
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
    this.redirect(substitution, "start");
  }

  private stopSubstitution(): void {
    if (!this.activeSubstitution) return;

    // Redirect to backend to get access token with the user's
    // original roles/permissions, not the substitution's ones.
    // Details see: https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Stellvertretung/Stellvertretung-Token/#stellvertretung-beenden
    this.redirect(this.activeSubstitution, "stop");
  }

  private redirect(substitution: Substitution, action: "start" | "stop"): void {
    const { oAuthServer, oAuthPrefix } = getEnvSettings();
    const url = `${oAuthServer}/${oAuthPrefix}/Authorization/Substitutions/${substitution.Id}/${action}`;
    submit("POST", url, {
      access_token: tokenState.accessToken ?? "",
      redirect_uri: buildUrl("home"),
    });
  }

  private handleSubstitutionStart(
    event: CustomEvent<{ substitution: Substitution }>,
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
