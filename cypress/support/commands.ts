import {
  storeAccessToken,
  storeInstance,
  storeRefreshToken,
} from "../../src/utils/storage";

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add(
  "login",
  ({
    locale = "de-CH",
    roles = ["LessonTeacherRole", "TeacherRole"],
    permissions = [],
    additionalTokenPayload = {},
  } = {}) => {
    cy.window().then(() => {
      storeInstance("Test");
      ["Tutoring", "Public", "NG"].forEach((scope) => {
        const token = createToken(scope, { locale, additionalTokenPayload });
        storeRefreshToken(scope, token);
        storeAccessToken(scope, token);
      });
    });

    // Mock environment settings
    cy.intercept(
      "/settings.js",
      `
        window.eventoPortal = {
          settings: {
            apiServer: "https://eventotest.api/restApi",
            oAuthServer: "https://eventotest.api",
            oAuthPrefix: "/OAuth",
            oAuthClientId: "cypress",
            notificationRefreshTime: 30,
          },
        };
      `,
    );

    cy.intercept(
      "GET",
      "https://eventotest.api/restApi/UserSettings/?expand=AccessInfo",
      { AccessInfo: { Roles: roles, Permissions: permissions } },
    ).as("fetchAccessInfo");

    cy.intercept(
      "GET",
      "https://eventotest.api/restApi/Configurations/SchoolAppNavigation",
      { instanceName: "Test", guiLanguage: ["de-CH", "fr-CH"] },
    );

    cy.intercept(
      "GET",
      "https://eventotest.api/restApi/TeacherSubstitutions/current",
      [],
    );

    cy.intercept("GET", "https://eventotest.api/restApi/UserSettings/Cst", {
      Settings: [],
    });
  },
);

/**
 * Creates a mock token for testing purposes.
 */
export function createToken(
  scope: string,
  {
    locale = "de-CH",
    expiration = Math.floor(Date.now() / 1000) + 60 * 60, // 1h from now
    additionalTokenPayload = {},
  }: Partial<{
    locale: string;
    expiration: number;
    additionalTokenPayload: Record<string, unknown>;
  }> = {},
) {
  const header = {
    typ: "JWT",
    alg: "HS256",
  };

  const body = {
    iss: "oauthpublic",
    aud: "https://cypress/",
    nbf: expiration,
    exp: expiration,
    token_purpose: "User",
    scope,
    consumer_id: "cypress",
    instance_id: "BsTest",
    username: "1234",
    culture_info: locale,
    redirect_uri: "http://localhost:3000",
    id_mandant: "960",
    id_person: "1234",
    fullname: "Somebody",
    roles: [],
    token_id: uuid(),
    ...additionalTokenPayload,
  };

  return `${btoa(JSON.stringify(header))}.${btoa(
    JSON.stringify(body),
  )}.signature`;
}

function uuid() {
  return Cypress._.uniqueId(Date.now().toString());
}

Cypress.Commands.add("visitPortal", (...args) => {
  const result = cy.visit(...args);

  // Wait for roles & permissions to be loaded
  return cy.wait("@fetchAccessInfo").then(() => result);
});

Cypress.Commands.add("resizeToDesktop", () => {
  cy.viewport("macbook-16");
});

Cypress.Commands.add("resizeToMobile", () => {
  cy.viewport("iphone-8");
});

Cypress.Commands.add(
  "ariaExpanded",
  { prevSubject: true },
  (subject, expanded) =>
    cy
      .wrap(subject)
      .invoke("attr", "aria-expanded")
      .should((value) => {
        if (expanded) {
          expect(value).to.eq("true");
        } else {
          expect(value).to.be.oneOf(["false", "", undefined]);
        }
        return subject;
      }),
);

Cypress.Commands.add("iframeContains", (...args) => {
  const selector = args.length == 2 ? args[0] : null;
  const text = args[args.length - 1];
  cy.get("iframe").should((iframe) => {
    const iframeBody = Cypress.$(iframe[0].contentDocument.body);
    const result = selector
      ? iframeBody.find(selector).text()
      : iframeBody.text();
    expect(result).to.include(text);
  });
});
