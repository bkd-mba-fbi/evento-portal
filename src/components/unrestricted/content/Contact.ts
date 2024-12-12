import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { contentStyles, theme } from "../../../utils/theme";

@customElement("bkd-contact")
@localized()
export class Contact extends LitElement {
  static styles = [theme, contentStyles];

  render() {
    return html`<p>
      ${msg(
        "Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.",
      )}
    </p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-contact": Contact;
  }
}
