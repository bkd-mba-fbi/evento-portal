describe("Service Navigation", () => {
  beforeEach(() => cy.login());

  describe("desktop", () => {
    beforeEach(() => {
      cy.resizeToDesktop();
      cy.visit("/index.html");
    });

    it("open/closes user settings", () => {
      // User settings menu initially closed
      cy.get("button[aria-label='Menü Benutzereinstellungen']")
        .as("toggle")
        .should("be.visible")
        .ariaExpanded(false);
      cy.get("#settings-menu").as("service-nav").should("not.be.visible");

      // Open user settings menu
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(true);
      cy.get("@service-nav").should("be.visible");

      // Close user settings menu
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@service-nav").should("not.be.visible");
    });

    it("renders user settings in the service navigation", () => {
      // User settings menu initially closed
      cy.get("button[aria-label='Menü Benutzereinstellungen']")
        .as("toggle")
        .should("be.visible")
        .ariaExpanded(false);
      cy.get("#settings-menu").as("service-nav").should("not.be.visible");

      // Open user settings menu
      cy.get("@toggle").click();
      cy.get("@service-nav")
        .should("be.visible")
        .find("a")
        .then((links) =>
          expect(
            links.toArray().map((link) => link.textContent?.trim())
          ).to.deep.eq([
            "Mein Profil",
            "Einstellungen",
            "Video-Tutorials",
            "Logout",
          ])
        );
    });

    // Apparently the triggering of the 'keydown' event does not work
    // when run headless
    it.skip("closes user settings on escape", () => {
      // User settings menu initially closed
      cy.get("button[aria-label='Menü Benutzereinstellungen']")
        .as("toggle")
        .should("be.visible")
        .ariaExpanded(false);
      cy.get("#settings-menu").as("service-nav").should("not.be.visible");

      // Open user settings menu
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(true);
      cy.get("@service-nav").should("be.visible");

      // Close user settings menu
      cy.document().trigger("keydown", { key: "Escape" });
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@service-nav").should("not.be.visible");
    });

    it("closes user settings on select", () => {
      // User settings menu initially closed
      cy.get("button[aria-label='Menü Benutzereinstellungen']")
        .as("toggle")
        .should("be.visible")
        .ariaExpanded(false);
      cy.get("#settings-menu").as("service-nav").should("not.be.visible");

      // Open user settings menu
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(true);
      cy.get("@service-nav").should("be.visible");

      // Close user settings menu
      cy.get("@service-nav")
        .contains("a", "Mein Profil")
        .should("be.visible")
        .click();
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@service-nav").should("not.be.visible");
    });

    it("closes user settings on click away", () => {
      // User settings menu initially closed
      cy.get("button[aria-label='Menü Benutzereinstellungen']")
        .as("toggle")
        .should("be.visible")
        .ariaExpanded(false);
      cy.get("#settings-menu").as("service-nav").should("not.be.visible");

      // Open user settings menu
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(true);
      cy.get("@service-nav").should("be.visible");

      // Close user settings menu
      cy.get('img[alt="Evento Startseite"]').should("be.visible").click();
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@service-nav").should("not.be.visible");
    });

    it("renders language switcher in the service navigation", () => {
      cy.get("bkd-language-switcher")
        .find("a")
        .then((links) =>
          expect(
            links.toArray().map((link) => link.textContent.trim())
          ).to.deep.eq(["de", "fr"])
        );
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("renders user settings and language switcher in the mobile navigation", () => {
      // Mobile navigation initially closed
      cy.get("button[aria-label='Menü Benutzereinstellungen']")
        .should("not.be.visible")
        .ariaExpanded(false);
      cy.get("#settings-menu").should("not.be.visible");

      // Open mobile navigation
      cy.get("button[aria-label='Menü']").as("toggle");
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(true);
      cy.get(".service-nav").as("service-nav").should("be.visible");

      cy.get("@service-nav")
        .find("a")
        .then((links) =>
          expect(
            links.toArray().map((link) => link.textContent?.trim())
          ).to.deep.eq([
            "Mein Profil",
            "Einstellungen",
            "Video-Tutorials",
            "Logout",
            "de",
            "fr",
          ])
        );
    });
  });
});
