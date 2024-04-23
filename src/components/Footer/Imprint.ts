import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { StateController } from "@lit-app/state";
import { portalState } from "../../state/portal-state";
import { withLineBreaks } from "../../utils/templates";
import { contentStyles, theme } from "../../utils/theme";

@customElement("bkd-imprint")
@localized()
export class Imprint extends LitElement {
  static styles = [theme, contentStyles];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  render() {
    return html`
      <div class="content-section">
        <h2>${msg("Inhaltsverantwortung")}</h2>
        <p>${msg("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${msg("Fachapplikation")}</h2>
        <p>
          ${withLineBreaks(
            msg(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`),
          )}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${msg("E-Mail")}</a></p>
      </div>

      <div class="content-section">
        <h2>${msg("Betrieb und Technik")}</h2>
        <p>
          ${withLineBreaks(
            msg(
              `Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`,
            ),
          )}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-imprint": Imprint;
  }
}
