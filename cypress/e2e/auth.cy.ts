import {
  resetAllTokens,
  storeAccessToken,
  storeCurrentAccessToken,
  storeRefreshToken,
} from "../../src/utils/storage";
import { createToken } from "../support/commands";

const SCOPE = "Tutoring";
const OTHER_SCOPE = "Public";

const TEN_MINUTES = 10 * 60 * 1000;
const HALF_HOUR = 30 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

describe("Authentication", () => {
  beforeEach(() => {
    cy.login({
      locale: "de-CH",
      roles: ["LessonTeacherRole", "TeacherRole"],
      permissions: [],
    });
    cy.resizeToDesktop();
  });

  describe("token handling on visit", () => {
    it("renders app if current token has correct scope", () => {
      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");
    });

    it("renders app if current token has different scope and cached token for desired scope is available", () => {
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
      cy.iframeContains("h2", "Stundenplan");
    });

    it("renews token if current token has correct scope but is expired", () => {
      cy.window().then(() => {
        resetAllTokens();

        const refreshToken = createToken(SCOPE, { locale: "de-CH" });
        const accessToken = createToken(SCOPE, {
          locale: "de-CH",
          expiration: Math.floor((Date.now() - ONE_HOUR) / 1000),
        });
        storeRefreshToken(SCOPE, refreshToken);
        storeAccessToken(SCOPE, accessToken);
        storeCurrentAccessToken(accessToken);
      });
      interceptTokenRenewal(
        createToken(SCOPE, { locale: "de-CH" }),
        createToken(SCOPE, { locale: "de-CH" }),
      ).as("tokenRenewal");

      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");
      cy.wait("@tokenRenewal").its("request").should("exist");
    });

    it("renews token if current token has different scope and cached token for desired scope is available but expired", () => {
      cy.window().then(() => {
        resetAllTokens();

        const refreshToken = createToken(SCOPE, { locale: "de-CH" });
        const accessToken = createToken(SCOPE, {
          locale: "de-CH",
          expiration: Math.floor((Date.now() - ONE_HOUR) / 1000),
        });
        storeRefreshToken(SCOPE, refreshToken);
        storeAccessToken(SCOPE, accessToken);

        const otherToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
        storeRefreshToken(OTHER_SCOPE, otherToken);
        storeAccessToken(OTHER_SCOPE, otherToken);
        storeCurrentAccessToken(otherToken);
      });
      interceptTokenRenewal(
        createToken(SCOPE, { locale: "de-CH" }),
        createToken(SCOPE, { locale: "de-CH" }),
      ).as("tokenRenewal");

      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");
      cy.wait("@tokenRenewal").its("request").should("exist");
    });

    it("redirects to login page if current token has different scope but cached token for required scope is unavailable", () => {
      cy.window().then(() => {
        resetAllTokens();

        const otherToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
        storeRefreshToken(OTHER_SCOPE, otherToken);
        storeAccessToken(OTHER_SCOPE, otherToken);
        storeCurrentAccessToken(otherToken);
      });

      expectLoginRedirect(() => {
        cy.visit("/index.html");
      });
    });

    it("redirects to login page if no tokens are available", () => {
      cy.window().then(() => {
        resetAllTokens();
      });

      expectLoginRedirect(() => {
        cy.visit("/index.html");
      });
    });

    it("redirects to login page if refresh token has correct scope but expired", () => {
      cy.window().then(() => {
        resetAllTokens();

        // Hypothetical case where refresh token is already expired
        // but access token is not, but it makes sure we test the
        // correct logic
        const refreshToken = createToken(SCOPE, {
          locale: "de-CH",
          expiration: Math.floor((Date.now() - ONE_HOUR) / 1000),
        });
        const accessToken = createToken(SCOPE, { locale: "de-CH" });
        storeRefreshToken(SCOPE, refreshToken);
        storeAccessToken(SCOPE, accessToken);
        storeCurrentAccessToken(accessToken);
      });
      expectLoginRedirect(() => {
        cy.visit("/index.html");
      });
    });

    it("redirects to login page when token renewal fails", () => {
      cy.window().then(() => {
        resetAllTokens();

        const refreshToken = createToken(SCOPE, { locale: "de-CH" });
        const accessToken = createToken(SCOPE, {
          locale: "de-CH",
          expiration: Math.floor((Date.now() - ONE_HOUR) / 1000),
        });
        storeRefreshToken(SCOPE, refreshToken);
        storeAccessToken(SCOPE, accessToken);
        storeCurrentAccessToken(accessToken);
      });
      cy.intercept(
        "https://eventotest.api/OAuth/Authorization/Test/Token",
        {
          method: "POST",
          times: 1,
        },
        { statusCode: 401, body: { error: "invalid_grant" } },
      ).as("tokenRenewal");

      expectLoginRedirect(() => {
        cy.visit("/index.html");
      });
      cy.wait("@tokenRenewal").its("request").should("exist");
    });
  });

  describe("token handling on navigation", () => {
    it("renders app when switching to another module of same app (i.e. same scope)", () => {
      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");

      // Switch to another module of same app
      navigate("Unterricht", "Präsenzkontrolle");
      cy.iframeContains("h1", "Präsenzkontrolle");
    });

    it("renders app when switching to app with different scope and cached token is available", () => {
      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");

      // Switch to app with other scope
      navigate("Angebote", "Kurse und Veranstaltungen");
      cy.iframeContains("Freie Plätze");
    });

    it("redirects to login when switching to app with different scope but cached token is unavailable", () => {
      cy.window().then(() => {
        resetAllTokens();

        const token = createToken(SCOPE, { locale: "de-CH" });
        storeRefreshToken(SCOPE, token);
        storeAccessToken(SCOPE, token);
        storeCurrentAccessToken(token);
      });

      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");

      // Switch to app with other scope
      expectLoginRedirect(() => {
        navigate("Angebote", "Kurse und Veranstaltungen");
      });
    });

    it("renews token when switching to app with different scope and cached token is available but expired", () => {
      cy.window().then(() => {
        resetAllTokens();

        const token = createToken(SCOPE, { locale: "de-CH" });
        storeRefreshToken(SCOPE, token);
        storeAccessToken(SCOPE, token);
        storeCurrentAccessToken(token);

        const refreshToken = createToken(OTHER_SCOPE, { locale: "de-CH" });
        const accessToken = createToken(OTHER_SCOPE, {
          locale: "de-CH",
          expiration: Math.floor((Date.now() - ONE_HOUR) / 1000),
        });
        storeRefreshToken(OTHER_SCOPE, refreshToken);
        storeAccessToken(OTHER_SCOPE, accessToken);
      });

      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");

      interceptTokenRenewal(
        createToken(OTHER_SCOPE, { locale: "de-CH" }),
        createToken(OTHER_SCOPE, { locale: "de-CH" }),
      ).as("tokenRenewal");

      // Switch to app with other scope
      navigate("Angebote", "Kurse und Veranstaltungen");
      cy.wait("@tokenRenewal").its("request").should("exist");
      cy.iframeContains("Freie Plätze");
    });
  });

  describe("token handling while app is in use", () => {
    it("renews access token in the background when it expires and redirects to login when refresh token expires", () => {
      const now = new Date();
      cy.clock(now);

      // Initial token pair
      const time1 = now.getTime();
      const refreshToken1 = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor((time1 + HALF_HOUR) / 1000),
      });
      const accessToken1 = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor((time1 + TEN_MINUTES) / 1000),
      });

      // Renewed token pair with renewed but same expirations
      const time2 = time1 + TEN_MINUTES;
      const refreshToken2 = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor((time2 + HALF_HOUR) / 1000),
      });
      const accessToken2 = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor((time2 + TEN_MINUTES) / 1000),
      });

      // Another renewed token pair, this time with a refresh token
      // that expires first (to test refresh token expiration)
      const time3 = time2 + TEN_MINUTES;
      const refreshToken3 = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor((time3 + HALF_HOUR) / 1000),
      });
      const accessToken3 = createToken(SCOPE, {
        locale: "de-CH",
        expiration: Math.floor((time3 + ONE_HOUR) / 1000),
      });

      cy.window().then(() => {
        resetAllTokens();

        storeRefreshToken(SCOPE, refreshToken1);
        storeAccessToken(SCOPE, accessToken1);
        storeCurrentAccessToken(accessToken1);
      });

      // We have valid tokens initially
      cy.visitPortal("/index.html");
      cy.iframeContains("h2", "Stundenplan");

      // Access token expires after 10 minutes and is renewed
      interceptTokenRenewal(refreshToken2, accessToken2).as(
        "firstTokenRenewal",
      );
      cy.tick(TEN_MINUTES);
      cy.wait("@firstTokenRenewal").its("request").should("exist");

      // Access token expires again after 10 minutes and is renewed
      interceptTokenRenewal(refreshToken3, accessToken3).as(
        "secondTokenRenewal",
      );
      cy.tick(TEN_MINUTES);
      cy.wait("@secondTokenRenewal").its("request").should("exist");

      // Refresh token expires, redirects to login
      expectLoginRedirect(() => {
        cy.tick(HALF_HOUR);
      });
    });
  });
});

function expectLoginRedirect(callback: () => void) {
  cy.intercept(
    "https://eventotest.api/OAuth/Authorization/Test/Login?*",
    "<html><body>Login</body></html>",
  );
  callback();
  cy.origin("https://eventotest.api", () => {
    cy.contains("Login").should("exist");
  });
}

function interceptTokenRenewal(refreshToken: string, accessToken: string) {
  return cy.intercept(
    "https://eventotest.api/OAuth/Authorization/Test/Token",
    {
      method: "POST",
      times: 1,
    },
    {
      refresh_token: refreshToken,
      access_token: accessToken,
      expires_in: 0, // Not relevant/unused
    },
  );
}

function navigate(menuName: string, itemName: string) {
  cy.contains("a", menuName).as("menuToggle").should("exist").click();

  cy.get("@menuToggle")
    .next("bkd-nav-group-dropdown")
    .shadow()
    .find("ul[role='menu']")
    .contains("a[role='menuitem']", itemName)
    .should("exist")
    .click();
}
