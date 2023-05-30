import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { configureLocalization, localized, msg } from "@lit/localize";
import { sourceLocale, targetLocales, allLocales } from "./locales.ts";

const { setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(/* @vite-ignore */ `/locales/${locale}.js`),
});

@customElement("my-element")
@localized()
export class MyElement extends LitElement {
  render() {
    return html` <h1>${msg("Willkommen bei Evento")}</h1>
      ${allLocales.map(
        (locale) =>
          html`<button @click="${() => setLocale(locale)}">${locale}</button>`
      )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
