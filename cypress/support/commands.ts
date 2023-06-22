import { storeToken } from "../../src/utils/storage";

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
  } = {}) => {
    ["Tutoring", "Public", "NG"].forEach((scope) => {
      const token = createToken(scope, { locale });
      storeToken(scope, {
        accessToken: token,
        expiresAt: Math.floor(Date.now() / 1000) + 60 * 60,
        refreshToken: token,
      });
    });

    cy.intercept(
      "GET",
      "https://eventoapp-test.erz.be.ch/restApi/UserSettings/?expand=AccessInfo",
      { AccessInfo: { Roles: roles, Permissions: permissions } }
    ).as("fetchAccessInfo");

    cy.intercept(
      "GET",
      "https://eventoapp-test.erz.be.ch/restApi/Configurations/SchoolAppNavigation",
      { instanceName: "Test" }
    );
  }
);

/**
 * Creates a mock token for testing purposes.
 */
function createToken(
  scope: string,
  {
    locale = "de-CH",
  }: Partial<{ locale: string; roles: ReadonlyArray<string> }> = {}
) {
  const header = {
    typ: "JWT",
    alg: "HS256",
  };

  const nextHour = Math.floor(Date.now() / 1000) + 60 * 60;
  const body = {
    iss: "oauthpublic",
    aud: "https://cypress/",
    nbf: nextHour,
    exp: nextHour,
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
    token_id: "123456",
  };

  return `${btoa(JSON.stringify(header))}.${btoa(
    JSON.stringify(body)
  )}.signature`;
}

Cypress.Commands.overwrite("visit", (originalFn, ...args) => {
  const result = originalFn(...args);

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
      })
);
