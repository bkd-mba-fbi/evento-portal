import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { portalState } from "../../state/portal-state";
import {
  customProperties,
  fontFaces,
  registerLightDomStyles,
  theme,
} from "../../utils/theme";
import "../Footer";
import "./ContentUnrestricted";
import "./HeaderUnrestricted";

portalState.init();

// Make custom properties available globally in light DOM
registerLightDomStyles(
  css`
    ${fontFaces}
    :root {
      ${customProperties}
    }
  `.toString(),
);

@customElement("bkd-portal-unrestricted")
@localized()
export class PortalUnrestricted extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content-unrestricted {
        flex: auto;
      }
    `,
  ];

  constructor() {
    super();

    new StateController(this, portalState);
  }

  render() {
    return html`
      <bkd-header-unrestricted></bkd-header-unrestricted>
      <bkd-content-unrestricted></bkd-content-unrestricted>
      <bkd-footer></bkd-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-portal-unrestricted": PortalUnrestricted;
  }
}
