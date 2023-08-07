describe("Locale", () => {
  // Apparently, since token refresh is involved, we cannot test the
  // language switching and must make sure that a token for the
  // desired locale is already present

  describe("with de-CH token", () => {
    beforeEach(() =>
      cy.login({
        locale: "de-CH",
        roles: ["LessonTeacherRole", "TeacherRole"],
        permissions: [],
      })
    );

    it("uses de-CH", () => {
      cy.resizeToDesktop();
      cy.visit("/index.html");
      cy.contains("Unterricht");
      cy.contains("Bildungs- und Kulturdirektion");

      cy.get("bkd-language-switcher").within(() => {
        cy.contains("a", "de").should("have.class", "active");
        cy.contains("a", "fr").should("not.have.class", "active");
      });
    });
  });

  describe("with fr-CH token", () => {
    beforeEach(() =>
      cy.login({
        locale: "fr-CH",
        roles: ["LessonTeacherRole", "TeacherRole"],
        permissions: [],
      })
    );

    it("uses fr-CH", () => {
      cy.resizeToDesktop();
      cy.visit("/index.html?locale=fr-CH");
      cy.contains("Enseignement");
      cy.contains("Direction de l'instruction publique et de la culture");

      cy.get("bkd-language-switcher").within(() => {
        cy.contains("a", "de").should("not.have.class", "active");
        cy.contains("a", "fr").should("have.class", "active");
      });
    });
  });
});
