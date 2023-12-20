describe("Substitutions", () => {
  function mockCurrentSubstitutions() {
    cy.intercept(
      "GET",
      "https://eventotest.api/restApi/TeacherSubstitutions/current",
      [
        {
          Id: 1,
          Holder: "Paul McCartney",
          HolderId: 10,
          DateFrom: "2022-05-22T00:00:00",
          Substitution: "Billy Preston",
          SubstitutionId: 20,
        },
        {
          Id: 2,
          Holder: "John Lennon",
          HolderId: 11,
          DateFrom: "2022-05-29T00:00:00",
          Substitution: "Billy Preston",
          SubstitutionId: 20,
        },
        {
          Id: 3,
          Holder: "George Harrison",
          HolderId: 12,
          DateFrom: "2022-06-04T00:00:00",
          Substitution: "Billy Preston",
          SubstitutionId: 20,
        },
        {
          Id: 4,
          Holder: "Ringo Starr",
          HolderId: 13,
          DateFrom: "2022-07-24T00:00:00", // Start date today
          Substitution: "Billy Preston",
          SubstitutionId: 20,
        },
        {
          Id: 5,
          Holder: "Pete Best",
          HolderId: 14,
          DateFrom: "2022-08-24T00:00:00", // Start date in the future
          Substitution: "Billy Preston",
          SubstitutionId: 20,
        },
      ],
    );
  }

  const now = new Date(2022, 6, 24);

  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://eventotest.api/OAuth/Authorization/Substitutions/2/start",
      cy
        .spy((req) => {
          req.redirect(`${Cypress.config("baseUrl")}/index.html`, 301);
        })
        .as("startRequest"),
    );

    cy.intercept(
      "POST",
      "https://eventotest.api/OAuth/Authorization/Substitutions/2/stop",
      cy
        .spy((req) => {
          req.redirect(`${Cypress.config("baseUrl")}/index.html`, 301);
        })
        .as("stopRequest"),
    );

    cy.clock(now);
  });

  describe("desktop", () => {
    beforeEach(() => {
      cy.resizeToDesktop();
    });

    describe("without active substitution", () => {
      beforeEach(() => {
        cy.login({ roles: ["TeacherRole"], permissions: [] });
        mockCurrentSubstitutions();
      });

      it("renders inactive toggle & opens dropdown with available substitutions", () => {
        cy.visit("/index.html");
        cy.contains("button", "Stellvertretung ausüben").as("toggle");

        cy.get("@toggle").get(".icon").should("not.be.visible");

        cy.get("#substitutions-menu").should("not.exist");
        cy.get("@toggle").click();
        cy.get("#substitutions-menu").as("dropdown").should("exist");

        cy.get("@dropdown").within(() => {
          cy.contains("a", "Paul McCartney").should("be.visible");
          cy.contains("a", "John Lennon").should("be.visible");
          cy.contains("a", "George Harrison").should("be.visible");
          cy.contains("a", "Ringo Starr").should("be.visible");
          cy.contains("a", "Pete Best").should("not.exist");

          cy.get(".dropdown-menu-header").should("not.be.visible");
          cy.contains("button", "Stellvertretung beenden").should("not.exist");
        });

        cy.get("@startRequest").should("not.have.been.called");
        cy.contains("a", "John Lennon").click();
        cy.get("@startRequest").should("have.been.called");
        cy.get("@stopRequest").should("not.have.been.called");
      });
    });

    describe("with active substitution", () => {
      beforeEach(() => {
        cy.login({
          roles: ["TeacherRole"],
          permissions: [],
          additionalTokenPayload: { substitution_id: "2" },
        });
        mockCurrentSubstitutions();
      });

      it("renders active toggle & stops substitution on click", () => {
        cy.visit("/index.html");
        cy.contains("button", "John Lennon").as("toggle");

        cy.get("@toggle").get(".icon").should("not.be.visible");

        cy.get("#substitutions-menu").should("not.exist");
        cy.get("@stopRequest").should("not.have.been.called");
        cy.get("@toggle").click();
        cy.get("@stopRequest").should("have.been.called");
        cy.get("@startRequest").should("not.have.been.called");
      });
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.resizeToMobile();
    });

    describe("without active substitution", () => {
      beforeEach(() => {
        cy.login({ roles: ["TeacherRole"], permissions: [] });
        mockCurrentSubstitutions();
      });

      it("renders inactive toggle & opens dropdown with available substitutions", () => {
        cy.visit("/index.html");
        cy.get('[aria-label="Stellvertretung ausüben"]').as("toggle");

        cy.get("@toggle").get(".icon").should("be.visible");
        cy.get("@toggle").get(".label").should("not.be.visible");

        cy.get("#substitutions-menu").should("not.exist");
        cy.get("@toggle").click();
        cy.get("#substitutions-menu").as("dropdown").should("exist");

        cy.get("@dropdown").within(() => {
          cy.contains("a", "Paul McCartney").should("be.visible");
          cy.contains("a", "John Lennon").should("be.visible");
          cy.contains("a", "George Harrison").should("be.visible");
          cy.contains("a", "Ringo Starr").should("be.visible");
          cy.contains("a", "Pete Best").should("not.exist");

          cy.get(".dropdown-menu-header").should("be.visible");
          cy.contains("button", "Stellvertretung beenden").should("not.exist");
        });

        cy.get("@startRequest").should("not.have.been.called");
        cy.contains("a", "John Lennon").click();
        cy.get("@startRequest").should("have.been.called");
        cy.get("@stopRequest").should("not.have.been.called");
      });
    });

    describe("with active substitution", () => {
      beforeEach(() => {
        cy.login({
          roles: ["TeacherRole"],
          permissions: [],
          additionalTokenPayload: { substitution_id: "2" },
        });
        mockCurrentSubstitutions();
      });

      it("renders active toggle & stops substitution on click", () => {
        cy.visit("/index.html");
        cy.get('[aria-label="John Lennon"]').as("toggle");

        cy.get("@toggle").get(".icon").should("be.visible");
        cy.get("@toggle").get(".label").should("not.be.visible");

        cy.get("#substitutions-menu").should("not.exist");
        cy.get("@toggle").click();
        cy.get("#substitutions-menu").as("dropdown").should("exist");

        cy.get("@dropdown").within(() => {
          cy.contains("a", "Paul McCartney").should("not.exist");
          cy.contains("a", "John Lennon")
            .should("be.visible")
            .parent("li")
            .should("have.class", "active");
          cy.contains("a", "George Harrison").should("not.exist");
          cy.contains("a", "Ringo Starr").should("not.exist");

          cy.get(".dropdown-menu-header").should("be.visible");

          cy.get("@stopRequest").should("not.have.been.called");
          cy.contains("button", "Stellvertretung beenden")
            .should("be.visible")
            .click();
          cy.get("@stopRequest").should("have.been.called");
          cy.get("@startRequest").should("not.have.been.called");
        });
      });
    });
  });
});
