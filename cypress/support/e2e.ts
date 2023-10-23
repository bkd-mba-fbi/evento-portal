// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

///// Typings for custom Cypress commands /////

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Make sure the user is authenticated (i.e. add a token for
       * each scope to localStorage)
       */
      login(
        options?: Partial<{
          locale: string;
          roles: ReadonlyArray<string>;
          permissions: ReadonlyArray<string>;
          additionalTokenPayload: Record<string, unknown>;
        }>,
      ): Chainable<void>;

      /**
       * Adjust viewport to desktop size
       */
      resizeToDesktop(): Chainable<void>;

      /**
       * Adjust viewport to mobile size
       */
      resizeToMobile(): Chainable<void>;

      /**
       * Expect the `aria-expanded` attribute of the current subject to have the given value.
       */
      ariaExpanded(expanded: boolean): Chainable<Subject>;
    }
  }
}
