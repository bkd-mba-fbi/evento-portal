describe("Navigation & Routing", () => {
  beforeEach(() => {
    cy.login({ roles: ["TeacherRole"], permissions: [] });
  });

  describe("desktop", () => {
    beforeEach(() => {
      cy.resizeToDesktop();
    });

    it("does not select any menu entry per default", () => {
      cy.visit("/index.html");
      cy.get("bkd-nav").as("desktopMenu").should("be.visible");

      // No group activated
      cy.get("@desktopMenu")
        .contains("a", "Unterricht")
        .as("teachingGroup")
        .should("not.have.class", "active");
      cy.get("@desktopMenu")
        .contains("a", "Absenzen")
        .should("not.have.class", "active");
      cy.get("@desktopMenu")
        .contains("a", "Angebote")
        .should("not.have.class", "active");

      // Open dropdown
      cy.get("@teachingGroup").click();
      cy.get("@teachingGroup")
        .next("bkd-nav-group-dropdown")
        .shadow()
        .find("ul[role='menu']")
        .as("groupDropdown")
        .should("be.visible");

      // No Item activated
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Präsenzkontrolle")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Aktuelle Fächer")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Tests und Bewertung")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Stellvertretung")
        .parent()
        .should("not.have.class", "active");

      // Displays home content
      cy.get("iframe").should(
        "have.attr",
        "src",
        "apps/webapp-schulverwaltung/index.html#/dashboard",
      );
    });

    it("selects menu entry from URL", () => {
      cy.visit("/index.html?module=presenceControl");
      cy.get("bkd-nav").as("desktopMenu").should("be.visible");

      // Activates navigation group
      cy.get("@desktopMenu")
        .contains("a", "Unterricht")
        .as("teachingGroup")
        .should("have.class", "active");
      cy.get("@desktopMenu")
        .contains("a", "Absenzen")
        .should("not.have.class", "active");
      cy.get("@desktopMenu")
        .contains("a", "Angebote")
        .should("not.have.class", "active");

      // Open dropdown
      cy.get("@teachingGroup").click();
      cy.get("@teachingGroup")
        .next("bkd-nav-group-dropdown")
        .shadow()
        .find("ul[role='menu']")
        .as("groupDropdown")
        .should("be.visible");

      // Activates navigation item in dropdown
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Präsenzkontrolle")
        .parent()
        .should("have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Aktuelle Fächer")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Tests und Bewertung")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Stellvertretung")
        .parent()
        .should("not.have.class", "active");

      // Displays item's content
      cy.get("iframe").should(
        "have.attr",
        "src",
        "apps/webapp-schulverwaltung/index.html#/presence-control",
      );

      // Does not redirect to home
      cy.window().should((window) => {
        const url = new URL(window.location.href);
        expect(url.searchParams.get("module")).to.eq("presenceControl");
      });
    });

    it("redirects to home for invalid item key in URL", () => {
      cy.visit("/index.html?module=asdf");
      cy.get("bkd-nav").as("desktopMenu").should("be.visible");

      // No group activated
      cy.get("@desktopMenu")
        .contains("a", "Unterricht")
        .as("teachingGroup")
        .should("not.have.class", "active");
      cy.get("@desktopMenu")
        .contains("a", "Absenzen")
        .should("not.have.class", "active");
      cy.get("@desktopMenu")
        .contains("a", "Angebote")
        .should("not.have.class", "active");

      // Open dropdown
      cy.get("@teachingGroup").click();
      cy.get("@teachingGroup")
        .next("bkd-nav-group-dropdown")
        .shadow()
        .find("ul[role='menu']")
        .as("groupDropdown")
        .should("be.visible");

      // No Item activated
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Präsenzkontrolle")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Aktuelle Fächer")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Tests und Bewertung")
        .parent()
        .should("not.have.class", "active");
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Stellvertretung")
        .parent()
        .should("not.have.class", "active");

      // Displays home content
      cy.get("iframe").should(
        "have.attr",
        "src",
        "apps/webapp-schulverwaltung/index.html#/dashboard",
      );

      // Does not redirect to home
      cy.window().should((window) => {
        const url = new URL(window.location.href);
        expect(url.searchParams.get("module")).to.eq("home");
      });
    });

    it("applies menu entry selection to URL", () => {
      cy.visit("/index.html");
      cy.get("bkd-nav").as("desktopMenu").should("be.visible");

      // Group not active
      cy.get("@desktopMenu")
        .contains("a", "Unterricht")
        .as("teachingGroup")
        .should("not.have.class", "active");

      // Displays home content
      cy.get("iframe").should(
        "have.attr",
        "src",
        "apps/webapp-schulverwaltung/index.html#/dashboard",
      );

      // Updates URL to ?module=home
      cy.window().should((window) => {
        const url = new URL(window.location.href);
        expect(url.searchParams.get("module")).to.eq("home");
      });

      // Open dropdown
      cy.get("@teachingGroup").click();
      cy.get("@teachingGroup")
        .next("bkd-nav-group-dropdown")
        .shadow()
        .find("ul[role='menu']")
        .as("groupDropdown")
        .should("be.visible");

      // Click item
      cy.get("@groupDropdown")
        .contains("a[role='menuitem']", "Präsenzkontrolle")
        .as("presenceControlItem")
        .click();
      cy.get("@groupDropdown").should("not.exist");

      // Group is active
      cy.get("@teachingGroup").should("have.class", "active");

      // Open dropdown
      cy.get("@teachingGroup").click();
      cy.get("@teachingGroup")
        .next("bkd-nav-group-dropdown")
        .shadow()
        .find("ul[role='menu']")
        .as("groupDropdown")
        .should("be.visible");

      // Item is active
      cy.get("@presenceControlItem").parent().should("have.class", "active");

      // Updates URL to ?module=presenceControl
      cy.window().should((window) => {
        const url = new URL(window.location.href);
        expect(url.searchParams.get("module")).to.eq("presenceControl");
      });

      // Displays home content
      cy.get("iframe").should(
        "have.attr",
        "src",
        "apps/webapp-schulverwaltung/index.html#/presence-control",
      );
    });

    it("visits profile (a specific sub app path of an item)", () => {
      cy.visit(
        "index.html?locale=de-CH&module=presenceControl#/presence-control/student/5389/absences?returnparams=date%3D2023-07-03%26viewMode%3Dgrid%26lesson%3D291257",
      );
      cy.get("bkd-nav").as("desktopMenu").should("be.visible");

      // Group active
      cy.get("@desktopMenu")
        .contains("a", "Unterricht")
        .as("teachingGroup")
        .should("have.class", "active");

      // Displays sub path content
      cy.get("iframe")
        .should(
          "have.attr",
          "src",
          "apps/webapp-schulverwaltung/index.html#/presence-control/student/5389/absences?returnparams=date%3D2023-07-03%26viewMode%3Dgrid%26lesson%3D291257",
        )
        .its("0.contentDocument.body")
        .should("contain", "Profil wurde nicht gefunden");

      // Updates URL to ?module=home
      cy.window().should((window) => {
        const url = new URL(window.location.href);
        expect(url.searchParams.get("module")).to.eq("presenceControl");
        expect(url.hash).to.eq(
          "#/presence-control/student/5389/absences?returnparams=date%3D2023-07-03%26viewMode%3Dgrid%26lesson%3D291257",
        );
      });
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.resizeToMobile();
    });

    it("selects menu item from URL and expands its group", () => {
      cy.visit("/index.html?module=presenceControl");
      cy.get("iframe").should(
        "have.attr",
        "src",
        "apps/webapp-schulverwaltung/index.html#/presence-control",
      );
      cy.get("button[aria-label='Menü']").as("toggle").should("be.visible");

      // Open menu
      cy.get("@toggle").click();
      cy.get("bkd-mobile-nav").as("mobileMenu").should("be.visible");

      cy.get("@mobileMenu").within(() => {
        cy.contains("li", "Unterricht").as("teachingGroup").ariaExpanded(true);
        cy.get("@teachingGroup")
          .contains("li.item", "Präsenzkontrolle")
          .should("have.class", "active");
      });
    });
  });
});
