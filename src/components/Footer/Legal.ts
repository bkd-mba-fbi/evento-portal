import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { withLineBreaks } from "../../utils/templates";
import { contentStyles, theme } from "../../utils/theme";

@customElement("bkd-legal")
@localized()
export class Legal extends LitElement {
  static styles = [
    theme,
    contentStyles,
    css`
      .table-container {
        overflow-x: auto;
        margin-bottom: 0.9375rem;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      }

      tbody,
      tfoot,
      thead {
        border: none;
        background-color: transparent;
      }

      tfoot td,
      tfoot th,
      thead td,
      thead th,
      tbody td,
      tbody th {
        padding: 0.75rem;
        text-align: left;
      }

      th,
      th {
        font-weight: 1rem;
        font-weight: 500;
      }

      tbody td {
        font-size: 0.875rem;
        line-height: 1.125rem;
        border-bottom: 1px solid var(--bkd-table-border);
      }

      thead,
      tbody tr:last-of-type th,
      tbody tr:last-of-type td {
        border-bottom: 1px solid var(--bkd-brand-black);
      }
    `,
  ];

  render() {
    return html`
      <div class="content-section">
        <h2>${msg("Haftungsausschluss")}</h2>
        <p>
          ${msg(
            "Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.",
          )}
        </p>
        <p>
          ${msg(
            "Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.",
          )}
        </p>
      </div>

      <div class="content-section">
        <h2>${msg("Immaterialgüterrechte")}</h2>
        <p>
          ${msg(
            "Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.",
          )}
        </p>
      </div>

      <div class="content-section">
        <h2>${msg("Datenschutzerklärung")}</h2>
        <p>
          ${msg(
            "Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:",
          )}
        </p>
        <p>
          ${withLineBreaks(
            msg(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`),
          )}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${msg("E-Mail")}</a></p>
        <p>
          <a href="${msg("https://www.be.ch/mba")}" target="_blank"
            >${msg("https://www.be.ch/mba").replace("https://", "")}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${msg("Datenbearbeitung")}</h2>
        <p>
          ${msg(
            "Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.",
          )}
        </p>
        <p>
          ${msg(
            "Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:",
          )}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${msg("Leistungserbringer")}</th>
                <th>${msg("Bearbeitete Daten")}</th>
                <th>${msg("Grund der Bearbeitung")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${withLineBreaks(
                    msg(
                      `Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`,
                    ),
                  )}
                </th>
                <td>
                  ${msg(
                    "IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit",
                  )}
                </td>
                <td>
                  ${msg(
                    "Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.",
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${msg("Cookies")}</h2>
        <p>${msg("Diese Webseite setzt keine Cookies ein.")}</p>
      </div>

      <div class="content-section">
        <h2>${msg("Soziale Medien")}</h2>
        <p>
          ${msg(
            "Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.",
          )}
        </p>
      </div>

      <div class="content-section">
        <h2>${msg("Kontakt bei Fragen")}</h2>
        <p>
          ${msg(
            "Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.",
          )}
        </p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-legal": Legal;
  }
}
