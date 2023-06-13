describe("Navigation", () => {
  describe("with 'LessonTeacherRole' & 'TeacherRole' roles", () => {
    beforeEach(() =>
      cy.login({ roles: ["LessonTeacherRole", "TeacherRole"], permissions: [] })
    );

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

  describe("with 'Student' role", () => {
    beforeEach(() => {
      cy.login({ roles: ["Student"], permissions: [] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Angebote", "Aus-/Weiterbildungen"]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Räume und Geräte reservieren",
        ]);

        expectGroupItems("Aus-/Weiterbildungen", [
          "Absenzen",
          "Noten",
          "Stundenplan",
        ]);
      });
    });
  });

  describe("with 'TeacherRole' role", () => {
    beforeEach(() => {
      cy.login({ roles: ["TeacherRole"], permissions: [] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Unterricht", "Absenzen", "Angebote"]);

        expectGroupItems("Unterricht", [
          "Präsenzkontrolle",
          "Aktuelle Fächer",
          "Tests und Bewertung",
          "Stellvertretung",
        ]);

        expectGroupItems("Absenzen", [
          "Offene Absenzen entschuldigen",
          "Absenzen bearbeiten",
          "Absenzen auswerten",
        ]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Schulinterne Weiterbildung",
          "Räume und Geräte reservieren",
        ]);
      });
    });
  });

  describe("with 'ClassTeacherRole' role", () => {
    beforeEach(() => {
      cy.login({ roles: ["ClassTeacherRole"], permissions: [] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Unterricht", "Absenzen", "Angebote"]);

        expectGroupItems("Unterricht", ["Aktuelle Fächer"]);

        expectGroupItems("Absenzen", [
          "Offene Absenzen entschuldigen",
          "Absenzen bearbeiten",
          "Absenzen auswerten",
        ]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Schulinterne Weiterbildung",
          "Räume und Geräte reservieren",
        ]);
      });
    });
  });

  describe("with 'AbsenceAdministrator' role", () => {
    beforeEach(() => {
      cy.login({ roles: ["AbsenceAdministrator"], permissions: [] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Absenzen", "Angebote"]);

        expectGroupItems("Absenzen", [
          "Absenzen bearbeiten",
          "Absenzen auswerten",
        ]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Schulinterne Weiterbildung",
          "Räume und Geräte reservieren",
        ]);
      });
    });
  });

  describe("with 'SubstituteAdministrator' role", () => {
    beforeEach(() => {
      cy.login({ roles: ["SubstituteAdministrator"], permissions: [] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Angebote", "Administration"]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Schulinterne Weiterbildung",
          "Räume und Geräte reservieren",
        ]);

        expectGroupItems("Administration", [
          "Stellvertretungen administrieren",
        ]);
      });
    });
  });

  describe("with 'PersonRight' permission", () => {
    beforeEach(() => {
      cy.login({ roles: [], permissions: ["PersonRight"] });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Angebote", "Administration"]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Räume und Geräte reservieren",
        ]);

        expectGroupItems("Administration", [
          "Personen und Institutionen suchen",
          "Anmeldedetails einlesen",
        ]);
      });
    });
  });

  describe("with 'RegistrationRightWeiterbildungModulanlass' permission", () => {
    beforeEach(() => {
      cy.login({
        roles: [],
        permissions: ["RegistrationRightWeiterbildungModulanlass"],
      });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Angebote", "Administration"]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Räume und Geräte reservieren",
        ]);

        expectGroupItems("Administration", ["Anmeldedetails einlesen"]);
      });
    });
  });

  describe("with 'RegistrationRightWeiterbildungKurs' permission", () => {
    beforeEach(() => {
      cy.login({
        roles: [],
        permissions: ["RegistrationRightWeiterbildungKurs"],
      });
      cy.resizeToMobile();
      cy.visit("/index.html");
    });

    it("only renders allowed groups & items", () => {
      cy.get("button[aria-label='Menü']").click();

      cy.get("bkd-mobile-nav").within((mobileMenu) => {
        cy.wrap(mobileMenu).should("be.visible");

        expectGroups(["Angebote", "Administration"]);

        expectGroupItems("Angebote", [
          "Kurse und Veranstaltungen",
          "Räume und Geräte reservieren",
        ]);

        expectGroupItems("Administration", ["Anmeldedetails einlesen"]);
      });
    });
  });

  function expectGroups(expectedGroups: ReadonlyArray<string>) {
    return cy.get("li.group").then(($groups) => {
      const groups = $groups
        .find("button")
        .toArray()
        .map((groupToggle) => groupToggle.textContent?.trim());
      expect(groups).to.deep.eq(expectedGroups);
    });
  }

  function expectGroupItems(
    group: string,
    expectedItems: ReadonlyArray<string>
  ) {
    return cy.contains("li.group > button", group).then((groupToggle) => {
      const items = groupToggle
        .next("ul.items")
        .find("li")
        .toArray()
        .map((item) => item.textContent?.trim());
      expect(items).to.deep.eq(expectedItems);
    });
  }
});
