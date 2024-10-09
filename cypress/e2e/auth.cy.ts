import {
  resetAllTokens,
  storeAccessToken,
  storeCurrentAccessToken,
  storeRefreshToken,
} from "../../src/utils/storage";
import { createToken } from "../support/commands";

const SCOPE = "Tutoring";
const OTHER_SCOPE = "Public";

describe("Authentication", () => {
  beforeEach(() =>
    cy.login({
      locale: "de-CH",
      roles: ["LessonTeacherRole", "TeacherRole"],
      permissions: [],
    }),
  );

  it("redirects to login page if no tokens are available", () => {
    cy.window().then(() => {
      resetAllTokens();
    });
    interceptLoginRedirect();

    cy.visitWithoutWait("/index.html");
    cy.contains("Login").should("exist");
  });

  it("redirects to login page if refresh token is expired", () => {});

  it("redirects to login page if current token has different scope and no cached token for required scope is available", () => {
    cy.window().then(() => {
      resetAllTokens();

      const otherToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
      storeRefreshToken(OTHER_SCOPE, otherToken);
      storeAccessToken(OTHER_SCOPE, otherToken);
      storeCurrentAccessToken(otherToken);
    });

    interceptLoginRedirect();

    cy.visitWithoutWait("/index.html");
    cy.contains("Login").should("exist");
  });

  it("renders app if current token has different scope but cached token for required scope is available", () => {
    cy.window().then(() => {
      resetAllTokens();

      const token = createToken(SCOPE, { locale: "de-CH" });
      storeRefreshToken(SCOPE, token);
      storeAccessToken(SCOPE, token);

      const otherToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
      storeRefreshToken(OTHER_SCOPE, otherToken);
      storeAccessToken(OTHER_SCOPE, otherToken);
      storeCurrentAccessToken(otherToken);
    });

    cy.visit("/index.html");
    cy.contains("Stundenplan");
  });

  it("renders app if current token has correct scope", () => {
    cy.visit("/index.html");
    cy.contains("Stundenplan");
  });

  it("renews token if current token is expired", () => {});

  it("renews token if current token has different scope and cached token for required scope is available but expired", () => {});
});

function interceptLoginRedirect() {
  return cy.intercept(
    "https://eventotest.api/OAuth/Authorization/Test/Login?*",
    "<html><body>Login</body></html>",
  );
}
