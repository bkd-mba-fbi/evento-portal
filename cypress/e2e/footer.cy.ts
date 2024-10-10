describe("Footer", () => {
  beforeEach(() => {
    cy.resizeToDesktop();
  });

  describe("de", () => {
    beforeEach(() => {
      cy.login({ locale: "de-CH", roles: ["TeacherRole"], permissions: [] });
    });

    it("renders the footer with links to contact, legal and imprint pages", () => {
      cy.visitPortal("/index.html");

      cy.get("bkd-footer").within(() => {
        cy.get("a").contains("Kontakt");
        cy.get("a").contains("Rechtliche Hinweise");
        cy.get("a").contains("Impressum");
      });
    });

    it("renders the static contact page", () => {
      cy.visitPortal("/index.html");
      cy.get("bkd-footer").find("a").contains("Kontakt").click();

      cy.get("h1").contains("Kontakt", {});
      cy.contains("an die zuständige Stelle in ihrer Schule");
      cy.get("iframe").should("not.exist");
    });

    it("renders the static legal page", () => {
      cy.visitPortal("/index.html");
      cy.get("bkd-footer").find("a").contains("Rechtliche Hinweise").click();

      cy.get("h1").contains("Rechtliche Hinweise", {});
      cy.contains("Haftungsausschluss");
      cy.get("iframe").should("not.exist");
    });

    it("renders the static imprint page", () => {
      cy.visitPortal("/index.html");
      cy.get("bkd-footer").find("a").contains("Impressum").click();

      cy.get("h1").contains("Impressum", {});
      cy.contains("Inhaltsverantwortung");
      cy.get("iframe").should("not.exist");
    });
  });

  describe("fr", () => {
    beforeEach(() => {
      cy.login({ locale: "fr-CH", roles: ["TeacherRole"], permissions: [] });
    });

    it("renders the footer with links to contact, legal and imprint pages", () => {
      cy.visitPortal("/index.html?locale=fr-CH");
      cy.get("bkd-footer").within(() => {
        cy.get("a").contains("Contact");
        cy.get("a").contains("Mentions légales");
        cy.get("a").contains("Impressum");
      });
    });

    it("renders the static contact page", () => {
      cy.visitPortal("/index.html?locale=fr-CH");
      cy.get("bkd-footer").find("a").contains("Contact").click();

      cy.get("h1").contains("Contact", {});
      cy.contains("contacter le service compétent de leur établissement");
      cy.get("iframe").should("not.exist");
    });

    it("renders the static legal page", () => {
      cy.visitPortal("/index.html?locale=fr-CH");
      cy.get("bkd-footer").find("a").contains("Mentions légales").click();

      cy.get("h1").contains("Mentions légales", {});
      cy.contains("Exclusion de la responsabilité");
      cy.get("iframe").should("not.exist");
    });

    it("renders the static imprint page", () => {
      cy.visitPortal("/index.html?locale=fr-CH");
      cy.get("bkd-footer").find("a").contains("Impressum").click();

      cy.get("h1").contains("Impressum", {});
      cy.contains("Responsabilité du contenu");
      cy.get("iframe").should("not.exist");
    });
  });
});
