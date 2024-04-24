describe("Service Navigation", () => {
  beforeEach(() => cy.login());

  describe("desktop", () => {
    beforeEach(() => {
      cy.resizeToDesktop();
    });

    it("open/closes user settings", () => {
      cy.visit("/index.html");
      openServiceNavigation();

      // Close user settings menu
      cy.get("@toggle").click();
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@serviceNav").should("not.be.visible");
    });

    it("renders user settings in the service navigation", () => {
      cy.visit("/index.html");
      openServiceNavigation();

      cy.get("@serviceNav")
        .find("a")
        .should((links) =>
          expect(
            links.toArray().map((link) => link.textContent?.trim()),
          ).to.deep.eq([
            "Mein Profil",
            "Einstellungen",
            "Video-Tutorials",
            "Logout",
          ]),
        );
    });

    // Apparently the triggering of the 'keydown' event does not work
    // when run headless
    it.skip("closes user settings on escape", () => {
      cy.visit("/index.html");
      openServiceNavigation();

      // Close user settings menu
      cy.document().trigger("keydown", { key: "Escape" });
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@serviceNav").should("not.be.visible");
    });

    it("closes user settings on select", () => {
      cy.visit("/index.html");
      openServiceNavigation();

      // Close user settings menu
      cy.get("@serviceNav")
        .contains("a", "Mein Profil")
        .should("be.visible")
        .click();
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@serviceNav").should("not.be.visible");
    });

    it("closes user settings on click away", () => {
      cy.visit("/index.html");
      openServiceNavigation();

      // Close user settings menu
      cy.get("a.logo").click();
      cy.get("@toggle").ariaExpanded(false);
      cy.get("@serviceNav").should("not.be.visible");
    });

    it("renders language switcher in the service navigation for multilingual schools", () => {
      interceptGuiLanguagesRequest(["de-CH", "fr-CH"]);

      cy.visit("/index.html");
      cy.get("bkd-language-switcher")
        .find("a")
        .should((links) =>
          expect(
            links.toArray().map((link) => link.textContent.trim()),
          ).to.deep.eq(["de", "fr"]),
        );
    });

    it("does not render language switcher in the service navigation for monolingual schools", () => {
      interceptGuiLanguagesRequest(["de-CH"]);

      cy.visit("/index.html");
      cy.get("bkd-language-switcher").should("not.exist");
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.resizeToMobile();
    });

    it("renders user settings and language switcher in the mobile navigation for multilingual schools", () => {
      interceptGuiLanguagesRequest(["de-CH", "fr-CH"]);
      cy.visit("/index.html");
      openMobileNavigation();

      cy.get("@serviceNav")
        .find("a")
        .should((links) =>
          expect(
            links.toArray().map((link) => link.textContent?.trim()),
          ).to.deep.eq([
            "Mein Profil",
            "Einstellungen",
            "Video-Tutorials",
            "Logout",
            "de",
            "fr",
          ]),
        );
    });

    it("renders user settings in the mobile navigation for monolingual schools", () => {
      interceptGuiLanguagesRequest(["de-CH"]);
      cy.visit("/index.html");
      openMobileNavigation();

      cy.get("@serviceNav")
        .find("a")
        .should((links) =>
          expect(
            links.toArray().map((link) => link.textContent?.trim()),
          ).to.deep.eq([
            "Mein Profil",
            "Einstellungen",
            "Video-Tutorials",
            "Logout",
          ]),
        );
    });
  });
});

function interceptGuiLanguagesRequest(guiLanguage: string[]) {
  cy.intercept(
    "GET",
    "https://eventotest.api/restApi/Configurations/SchoolAppNavigation",
    { instanceName: "Test", guiLanguage },
  );
}

function openServiceNavigation() {
  // User settings menu initially closed
  cy.get("button[aria-label='Menü Benutzereinstellungen']")
    .as("toggle")
    .should("be.visible")
    .ariaExpanded(false);
  cy.get("bkd-user-settings")
    .find('ul[role="menu"]')
    .as("serviceNav")
    .should("not.be.visible");

  // Open user settings menu
  cy.get("@toggle").click();
  cy.get("@toggle").ariaExpanded(true);
  cy.get("@serviceNav").should("be.visible");
}

function openMobileNavigation() {
  // Mobile navigation initially closed
  cy.get("button[aria-label='Menü Benutzereinstellungen']")
    .should("not.be.visible")
    .ariaExpanded(false);
  cy.get("bkd-user-settings").find('ul[role="menu"]').should("not.be.visible");

  // Open mobile navigation
  cy.get("button[aria-label='Menü']").as("toggle");
  cy.get("@toggle").click();
  cy.get("@toggle").ariaExpanded(true);
  cy.get(".service-nav").as("serviceNav").should("be.visible");
}
