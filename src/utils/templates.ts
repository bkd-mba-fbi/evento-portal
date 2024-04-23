import { html } from "lit";
import { join } from "lit/directives/join.js";

export function withLineBreaks(message: string) {
  return join(message?.split("\n"), html`<br />`);
}
