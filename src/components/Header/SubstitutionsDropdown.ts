import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { localized, msg } from "@lit/localize";

import { theme } from "../../utils/theme";
import { Substitution } from "../../utils/fetch";

@customElement("bkd-substitutions-dropdown")
@localized()
export class SubstitutionsDropdown extends LitElement {
  @property()
  availableSubstitutions: ReadonlyArray<Substitution> = [];

  @property()
  activeSubstitution: Substitution | null = null;

  @property()
  open = false;

  static styles = [
    theme,
    css`
      :host {
        display: block;
        position: relative;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        margin: 0.5rem 0;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        max-height: 90vh;
        overflow: auto;
      }

      li {
        padding: 0 1.5rem;
        line-height: 2.5;
      }

      li.active {
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        padding: 0 calc(1.5rem - 6px);
      }

      li.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.active a:after {
        background-color: transparent;
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active::after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active::after {
        transform: scaleX(1);
      }

      button {
        cursor: pointer;
      }

      .dropdown-menu-header,
      .dropdown-menu-stop {
        display: none;
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        :host {
          position: static;
        }

        ul {
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: var(--bkd-margin-horizontal-small);
          border: none;
          max-height: 100vh;
        }

        li:not(.dropdown-menu-header):not(.dropdown-menu-stop) {
          height: 2.8rem;
          display: flex;
          align-items: center;
        }

        a {
          font-size: 1.125rem;
          font-weight: 300;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .dropdown-menu-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 0 0.75rem 0;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid var(--bkd-func-bg-line-grey);
        }

        .dropdown-menu-heading {
          font-size: calc(28 / 16 * 1rem);
        }

        .dropdown-menu-close {
          display: flex;
          margin-left: auto;
          padding: 0;
          background: none;
          border: none;
          aspect-ratio: 1/1;
        }

        .dropdown-menu-stop {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .dropdown-menu-stop button {
          display: block;
          width: 100%;
          max-width: 25rem;
          padding: 0.25rem 0.5rem;
          border: none;
          border-radius: calc(2 * 0.25rem + 1.125rem);
          font-size: 1.125rem;
          font-weight: 500;
          background-color: var(--bkd-func-bg-anthrazit);
          color: var(--bkd-func-fg-white);
        }
      }
    `,
  ];

  get displayedSubstitutions(): ReadonlyArray<Substitution> {
    return this.availableSubstitutions.filter(
      (s) => !this.activeSubstitution || s.Id === this.activeSubstitution.Id,
    );
  }

  private handleSubstitutionClick(
    event: MouseEvent,
    substitution: Substitution,
  ) {
    event.preventDefault();
    this.dispatchEvent(
      new CustomEvent<{ substitution: Substitution }>("bkdsubstitutionstart", {
        detail: { substitution },
        composed: true,
        bubbles: true,
      }),
    );
  }

  private handleStopClick(): void {
    this.dispatchEvent(
      new CustomEvent<void>("bkdsubstitutionstop", {
        composed: true,
        bubbles: true,
      }),
    );
  }

  private handleCloseClick(): void {
    this.dispatchEvent(new CustomEvent<void>("bkdclose"));
  }

  private renderSubstitution(substitution: Substitution) {
    const active = substitution.Id === this.activeSubstitution?.Id;
    return html`
      <li role="presentation" class=${classMap({ active })}>
        <a
          role="menuitem"
          href="#"
          @click=${(e: MouseEvent) =>
            this.handleSubstitutionClick(e, substitution)}
          >${substitution.Holder}</a
        >
      </li>
    `;
  }

  render() {
    if (!this.open) return;

    return html`
      <ul role="menu" id="substitutions-menu">
        <li class="dropdown-menu-header">
          <button
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${msg("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${msg("Stellvertretung ausüben")}
          </div>
        </li>
        ${map(this.displayedSubstitutions, this.renderSubstitution.bind(this))}
        ${when(
          this.activeSubstitution,
          () =>
            html`<li class="dropdown-menu-stop">
              <button @click=${this.handleStopClick.bind(this)}>
                ${msg("Stellvertretung beenden")}
              </button>
            </li>`,
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-substitutions-dropdown": SubstitutionsDropdown;
  }
}
