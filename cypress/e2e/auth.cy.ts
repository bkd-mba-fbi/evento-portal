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

    cy.visit("/index.html");
    cy.origin("https://eventotest.api", () => {
      cy.contains("Login").should("exist");
    });
  });

  it("redirects to login page if refresh token is expired", () => {
    cy.window().then(() => {
      resetAllTokens();

      // Hypothetical case where refresh token is already expired but
      // access token is not
      const refreshToken = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor(Date.now() / 1000) - 60 * 60,
      });
      const accessToken = createToken(SCOPE, { locale: "de-CH" });
      storeRefreshToken(SCOPE, refreshToken);
      storeAccessToken(SCOPE, accessToken);
      storeCurrentAccessToken(accessToken);
    });
    interceptLoginRedirect();

    cy.visit("/index.html");
    cy.origin("https://eventotest.api", () => {
      cy.contains("Login").should("exist");
    });
  });

  it("redirects to login page if current token has different scope and no cached token for required scope is available", () => {
    cy.window().then(() => {
      resetAllTokens();

      const otherToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
      storeRefreshToken(OTHER_SCOPE, otherToken);
      storeAccessToken(OTHER_SCOPE, otherToken);
      storeCurrentAccessToken(otherToken);
    });

    interceptLoginRedirect();

    cy.visit("/index.html");
    cy.origin("https://eventotest.api", () => {
      cy.contains("Login").should("exist");
    });
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

    cy.visitPortal("/index.html");
    cy.contains("Unterricht");
  });

  it("renders app if current token has correct scope", () => {
    cy.visitPortal("/index.html");
    cy.contains("Unterricht");
  });

  it("renews token if current token is expired", () => {
    cy.window().then(() => {
      resetAllTokens();

      const refreshToken = createToken(SCOPE, { locale: "de-CH" });
      const accessToken = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor(Date.now() / 1000) - 60 * 60,
      });
      storeRefreshToken(SCOPE, refreshToken);
      storeAccessToken(SCOPE, accessToken);
      storeCurrentAccessToken(accessToken);
    });
    const token = createToken("Tutoring", { locale: "de-CH" });
    cy.intercept("https://eventotest.api/OAuth/Authorization/Test/Token", {
      access_token: token,
      refresh_token: token,
      expires_in: 60 * 60,
    });

    cy.visitPortal("/index.html");
    cy.contains("Unterricht");
  });

  it("renews token if current token has different scope and cached token for required scope is available but expired", () => {
    cy.window().then(() => {
      resetAllTokens();

      const refreshToken = createToken(SCOPE, { locale: "de-CH" });
      const accessToken = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor(Date.now() / 1000) - 60 * 60,
      });
      storeRefreshToken(SCOPE, refreshToken);
      storeAccessToken(SCOPE, accessToken);

      const otherToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
      storeRefreshToken(OTHER_SCOPE, otherToken);
      storeAccessToken(OTHER_SCOPE, otherToken);
      storeCurrentAccessToken(otherToken);
    });
    const token = createToken("Tutoring", { locale: "de-CH" });
    cy.intercept("https://eventotest.api/OAuth/Authorization/Test/Token", {
      access_token: token,
      refresh_token: token,
      expires_in: 60 * 60,
    });

    cy.visitPortal("/index.html");
    cy.contains("Unterricht");
  });
});

function interceptLoginRedirect() {
  return cy.intercept(
    "https://eventotest.api/OAuth/Authorization/Test/Login?*",
    "<html><body>Login</body></html>",
  );
}
