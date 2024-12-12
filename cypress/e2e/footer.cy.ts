describe("Footer", () => {
  beforeEach(() => {
    cy.resizeToDesktop();
  });

  describe("authenticated", () => {
    describe("de", () => {
      beforeEach(() => {
        cy.login({ locale: "de-CH", roles: ["TeacherRole"], permissions: [] });
      });

      it("renders the footer with links to contact, legal and imprint pages", () => {
        cy.visitPortal("/");

        cy.get("bkd-footer").within(() => {
          cy.get("a").contains("Kontakt");
          cy.get("a").contains("Rechtliche Hinweise");
          cy.get("a").contains("Impressum");
        });
      });

      it("renders the static contact page", () => {
        cy.visitPortal("/");
        cy.get("bkd-footer").find("a").contains("Kontakt").click();

        cy.get("h1").contains("Kontakt", {});
        cy.contains("an die zuständige Stelle in ihrer Schule");
        cy.get("iframe").should("not.exist");
      });

      it("renders the static legal page", () => {
        cy.visitPortal("/");
        cy.get("bkd-footer").find("a").contains("Rechtliche Hinweise").click();

        cy.get("h1").contains("Rechtliche Hinweise", {});
        cy.contains("Haftungsausschluss");
        cy.get("iframe").should("not.exist");
      });

      it("renders the static imprint page", () => {
        cy.visitPortal("/");
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
        cy.visitPortal("/?locale=fr-CH");
        cy.get("bkd-footer").within(() => {
          cy.get("a").contains("Contact");
          cy.get("a").contains("Mentions légales");
          cy.get("a").contains("Impressum");
        });
      });

      it("renders the static contact page", () => {
        cy.visitPortal("/?locale=fr-CH");
        cy.get("bkd-footer").find("a").contains("Contact").click();

        cy.get("h1").contains("Contact", {});
        cy.contains("contacter le service compétent de leur établissement");
        cy.get("iframe").should("not.exist");
      });

      it("renders the static legal page", () => {
        cy.visitPortal("/?locale=fr-CH");
        cy.get("bkd-footer").find("a").contains("Mentions légales").click();

        cy.get("h1").contains("Mentions légales", {});
        cy.contains("Exclusion de la responsabilité");
        cy.get("iframe").should("not.exist");
      });

      it("renders the static imprint page", () => {
        cy.visitPortal("/?locale=fr-CH");
        cy.get("bkd-footer").find("a").contains("Impressum").click();

        cy.get("h1").contains("Impressum", {});
        cy.contains("Responsabilité du contenu");
        cy.get("iframe").should("not.exist");
      });
    });
  });

  describe("unauthenticated via /unrestricted/", () => {
    describe("de", () => {
      it("renders the static contact page", () => {
        cy.visit("/unrestricted/?locale=de-CH&module=contact");

        cy.get("h1").contains("Kontakt", {});
        cy.contains("an die zuständige Stelle in ihrer Schule");
      });

      it("renders the static legal page", () => {
        cy.visit("/unrestricted/?locale=de-CH&module=legal");

        cy.get("h1").contains("Rechtliche Hinweise", {});
        cy.contains("Haftungsausschluss");
      });

      it("renders the static imprint page", () => {
        cy.visit("/unrestricted/?locale=de-CH&module=imprint");

        cy.get("h1").contains("Impressum", {});
        cy.contains("Inhaltsverantwortung");
      });

      it("navigates to legal page via footer", () => {
        cy.visit("/unrestricted/?locale=de-CH&module=contact");
        cy.get("h1").contains("Kontakt", {});

        cy.get("bkd-footer").find("a").contains("Rechtliche Hinweise").click();
        cy.get("h1").contains("Rechtliche Hinweise", {});
      });

      it("switches language", () => {
        cy.visit("/unrestricted/?locale=de-CH&module=contact");
        cy.get("h1").contains("Kontakt", {});

        cy.get("bkd-language-switcher").find("a").contains("fr").click();
        cy.get("h1").contains("Contact", {});
        cy.url().should(
          "include",
          "/unrestricted/?locale=fr-CH&module=contact",
        );
      });
    });

    describe("fr", () => {
      it("renders the static contact page", () => {
        cy.visit("/unrestricted/?locale=fr-CH&module=contact");

        cy.get("h1").contains("Contact", {});
        cy.contains("contacter le service compétent de leur établissement");
      });

      it("renders the static legal page", () => {
        cy.visit("/unrestricted/?locale=fr-CH&module=legal");

        cy.get("h1").contains("Mentions légales", {});
        cy.contains("Exclusion de la responsabilité");
      });

      it("renders the static imprint page", () => {
        cy.visit("/unrestricted/?locale=fr-CH&module=imprint");

        cy.get("h1").contains("Impressum", {});
        cy.contains("Responsabilité du contenu");
      });
    });
  });
});
