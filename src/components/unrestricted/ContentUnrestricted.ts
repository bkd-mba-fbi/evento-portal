import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";
import { when } from "lit/directives/when.js";
import { localized } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { settings } from "../../settings";
import { portalState } from "../../state/portal-state";
import { getApp } from "../../utils/navigation";
import { theme } from "../../utils/theme";
import "./content/Contact";
import "./content/Imprint";
import "./content/Legal";

portalState.init();

@customElement("bkd-content-unrestricted")
@localized()
export class ContentUnrestricted extends LitElement {
  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-content-margin-top: 3rem;
        --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-large);
        padding: var(--bkd-content-margin-top)
          var(--bkd-content-margin-horizontal) 0
          var(--bkd-content-margin-horizontal);
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
        line-height: 2.25rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        margin: 0 0 calc(3.375rem / 2) 0;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-content-margin-top: 2rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        h1 {
          font-size: 2.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-content-margin-top: 1rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  private renderFooterContent() {
    return html`
      ${choose(
        portalState.navigationItemKey,
        [
          ["contact", () => html`<bkd-contact></bkd-contact>`],
          ["legal", () => html`<bkd-legal></bkd-legal>`],
          ["imprint", () => html`<bkd-imprint></bkd-imprint>`],
        ],
        () => html``,
      )}
    `;
  }

  render() {
    const navigationItem = settings.footer.find(
      ({ key }) => key === portalState.navigationItemKey,
    );
    const app = navigationItem ? getApp(navigationItem) : null;
    return html`
      <main role="main">
        ${when(app?.heading, () => html`<h1>${navigationItem?.label}</h1>`)}
        ${when(!navigationItem, () => html`<h1>Not found</h1>`)}
        ${this.renderFooterContent()}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-content-unrestricted": ContentUnrestricted;
  }
}
