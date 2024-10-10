import { createToken } from "../support/commands";

describe("Locale", () => {
  describe("with de-CH token", () => {
    beforeEach(() =>
      cy.login({
        locale: "de-CH",
        roles: ["LessonTeacherRole", "TeacherRole"],
        permissions: [],
      }),
    );

    it("uses de-CH", () => {
      cy.resizeToDesktop();
      cy.visitPortal("/index.html");
      cy.contains("Unterricht").should("exist");
      cy.iframeContains("Stundenplan");

      cy.get("bkd-language-switcher").within(() => {
        cy.contains("a", "de").should("have.class", "active");
        cy.contains("a", "fr").should("not.have.class", "active");
      });
    });

    it("switches to fr-CH token", () => {
      cy.resizeToDesktop();
      cy.visitPortal("/index.html");
      cy.contains("Unterricht").should("exist");
      cy.iframeContains("Stundenplan");

      const token = createToken("Tutoring", { locale: "fr-CH" });
      cy.intercept("https://eventotest.api/OAuth/Authorization/Test/Token", {
        access_token: token,
        refresh_token: token,
        expires_in: 60 * 60,
      });

      // Switch to fr
      cy.get("bkd-language-switcher").within(() => {
        cy.contains("a", "fr").click();
      });

      cy.contains("Enseignement").should("exist");
      cy.iframeContains("Horaire");
      cy.get("bkd-language-switcher").within(() => {
        cy.contains("a", "de").should("not.have.class", "active");
        cy.contains("a", "fr").should("have.class", "active");
      });
    });
  });

  describe("with fr-CH token", () => {
    beforeEach(() =>
      cy.login({
        locale: "fr-CH",
        roles: ["LessonTeacherRole", "TeacherRole"],
        permissions: [],
      }),
    );

    it("uses fr-CH", () => {
      cy.resizeToDesktop();
      cy.visitPortal("/index.html?locale=fr-CH");
      cy.contains("Enseignement").should("exist");
      cy.iframeContains("Horaire");

      cy.get("bkd-language-switcher").within(() => {
        cy.contains("a", "de").should("not.have.class", "active");
        cy.contains("a", "fr").should("have.class", "active");
      });
    });
  });
});
