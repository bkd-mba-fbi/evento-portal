describe("Navigation", () => {
  describe("as lesson/class teacher", () => {
    beforeEach(() => cy.login({ roles: ["LessonTeacherRole", "TeacherRole"] }));

    describe("desktop", () => {
      beforeEach(() => {
        cy.resizeToDesktop();
        cy.visit("/index.html");
      });

      it("renders main navigation", () => {
        cy.get("button[aria-label='Menü']").should("not.be.visible");
        cy.get("bkd-nav").as("desktop-menu").should("be.visible");

        cy.get("@desktop-menu")
          .find("a")
          .then(($links) =>
            expect(
              $links.toArray().map((link) => link.textContent?.trim())
            ).to.deep.eq(["Unterricht", "Absenzen", "Angebote"])
          );
      });

      it("renders dropdown with navigation items and closes it on click", () => {
        // TODO
      });
    });

    describe("mobile", () => {
      beforeEach(() => {
        cy.resizeToMobile();
        cy.visit("/index.html");
      });

      it("open/closes hamburger menu by click on hamburger", () => {
        cy.get("bkd-nav").as("desktop-menu").should("not.be.visible");

        // Hamburger menu is initially closed
        cy.get("button[aria-label='Menü']")
          .as("toggle")
          .should("be.visible")
          .ariaExpanded(false);
        cy.get("bkd-mobile-nav").should("not.exist");

        // Open menu
        cy.get("@toggle").click();
        cy.get("@toggle").ariaExpanded(true);
        cy.get("bkd-mobile-nav").as("mobile-menu").should("be.visible");

        // Renders contents with first group initially expanded
        cy.get("@mobile-menu").within(() => {
          cy.contains("li", "Unterricht")
            .as("teachingGroup")
            .ariaExpanded(true);
          cy.contains("li.group", "Absenzen")
            .as("absencesGroup")
            .ariaExpanded(false);
          cy.contains("li.group", "Angebote")
            .as("offersGroup")
            .ariaExpanded(false);

          // Expand absences group (collapses current expanded group)
          cy.get("@absencesGroup").find("button").click();

          cy.get("@teachingGroup").ariaExpanded(false);
          cy.get("@absencesGroup").ariaExpanded(true);
          cy.get("@offersGroup").ariaExpanded(false);
        });

        // Close menu by click on hamburger
        cy.get("@toggle").click();
        cy.get("@toggle").ariaExpanded(false);
        cy.get("@mobile-menu").should("not.exist");
      });

      it("closes hamburger menu on 'ESC' keypress", () => {
        cy.get("button[aria-label='Menü']").as("toggle").click();
        cy.get("@toggle").ariaExpanded(true);
        cy.get("bkd-mobile-nav").as("mobile-menu").should("be.visible");

        cy.document().trigger("keydown", { key: "Escape" });
        cy.get("@toggle").ariaExpanded(false);
        cy.get("@mobile-menu").should("not.exist");
      });

      it("closes hamburger menu when clicking on navigation item", () => {
        // TODO
      });
    });
  });

  describe("as student", () => {
    beforeEach(() => {
      cy.login({ roles: ["Student"] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        cy.contains("li > button", "Unterricht").should("not.exist");
        cy.contains("li > button", "Absenzen").should("not.exist");
        cy.contains("li > button", "Angebote").should("exist");
        cy.contains("li > button", "Aus-/Weiterbildungen").should("exist");
        cy.contains("li > button", "Administration").should("not.exist");
      });
    });
  });

  describe("as lesson teacher", () => {
    beforeEach(() => {
      cy.login({ roles: ["LessonTeacher"] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        cy.contains("li > button", "Unterricht").should("not.exist");
        cy.contains("li > button", "Absenzen").should("not.exist");
        cy.contains("li > button", "Angebote").should("exist");
        cy.contains("li > button", "Aus-/Weiterbildungen").should("not.exist");
        cy.contains("li > button", "Administration").should("not.exist");
      });
    });
  });

  describe("as absence administrator", () => {
    beforeEach(() => {
      cy.login({ roles: ["AbsenceAdministrator"] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        cy.contains("li > button", "Unterricht").should("not.exist");
        cy.contains("li > button", "Absenzen").should("exist");
        cy.contains("li > button", "Angebote").should("exist");
        cy.contains("li > button", "Aus-/Weiterbildungen").should("not.exist");
        cy.contains("li > button", "Administration").should("not.exist");
      });
    });
  });

  describe("as substitute administrator", () => {
    beforeEach(() => {
      cy.login({ roles: ["SubstituteAdministrator"] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        cy.contains("li > button", "Unterricht").should("not.exist");
        cy.contains("li > button", "Absenzen").should("not.exist");
        cy.contains("li > button", "Angebote").should("exist");
        cy.contains("li > button", "Aus-/Weiterbildungen").should("not.exist");
        cy.contains("li > button", "Administration").should("exist");
      });
    });
  });
});
