describe("Notifications", () => {
  const settings = [
    {
      Key: "notificationData",
      Value: JSON.stringify([
        {
          id: 1,
          subject:
            'Absenzmeldung<br>Berger Laura<br> <div style="opacity: 0.5;">05.12.2023 09:30</div>',
          body: "18.12.2023 <br> 27a, 1 Lektion<br>Arzt- oder Zahnarztbesuch",
        },
        {
          id: 2,
          subject:
            'Absenzmeldung<br>Burkhalter Leuenberger Julianne Sophie Fabienne<br> <div style="opacity: 0.5;">05.12.2023 09:52</div>',
          body: "18.12.2023 <br> 26b, 1 Lektion<br>Arzt- oder Zahnarztbesuch",
        },
        {
          id: 3,
          subject:
            'Absenzmeldung<br>Exemple Amélie<br> <div style="opacity: 0.5;">05.12.2023 09:53</div>',
          body: "22.01.2024 <br> 26b, 1 Lektion<br>Krankheit",
        },
        {
          id: 4,
          subject:
            'Absenzmeldung<br>Muster Anna<br> <div style="opacity: 0.5;">05.12.2023 09:54</div>',
          body: "15.01.2024 <br> 26b, 1 Lektion<br>Krankheit",
        },
      ]),
    },
  ];

  beforeEach(() => {
    cy.intercept(
      "PATCH",
      "https://eventotest.api/restApi/UserSettings/Cst",
      {},
    );
    cy.login({ roles: ["TeacherRole"], permissions: [] });
  });

  describe("no notifications", () => {
    it("renders bell without counter", () => {
      cy.visitPortal("/index.html");
      cy.get('[aria-label="Benachrichtigungen"]').as("toggle");
      cy.get("@toggle").get(".circle").should("be.hidden");
    });

    it("opens dropdown without notifications and delete button disabled", () => {
      cy.visitPortal("/index.html");
      cy.get('[aria-label="Benachrichtigungen"]').as("toggle");
      cy.get("@toggle").click();
      cy.get("#notifications-dropdown").as("dropdown").should("exist");
      cy.get("@dropdown").within(() => {
        cy.get(".header").contains("Benachrichtigungen");
        cy.contains("button", "Alle löschen").should("be.disabled");
        cy.get(".content").contains("Keine Benachrichtigungen");
      });
    });
  });

  describe("with notifications", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://eventotest.api/restApi/UserSettings/Cst", {
        Settings: settings,
      });
    });

    it("renders bell with counter", () => {
      cy.visitPortal("/index.html");
      cy.get('[aria-label="Benachrichtigungen"]').as("toggle");
      cy.get("@toggle").get(".circle").should("be.visible").contains("4");
    });

    it("opens dropdown showing notifications and delete button enabled", () => {
      cy.visitPortal("/index.html");
      cy.get('[aria-label="Benachrichtigungen"]').as("toggle");
      cy.get("@toggle").click();
      cy.get("#notifications-dropdown").as("dropdown").should("exist");
      cy.get("@dropdown").within(() => {
        cy.get(".header").contains("Benachrichtigungen");
        cy.contains("button", "Alle löschen").should("be.enabled");
        cy.get(".notification").should("have.length", 4);
        cy.contains(".subject", "Berger Laura").should("exist");
        cy.contains(
          ".subject",
          "Burkhalter Leuenberger Julianne Sophie",
        ).should("exist");
        cy.contains(".subject", "Exemple Amélie").should("exist");
        cy.contains(".subject", "Muster Anna").should("exist");
        cy.get('[aria-label="Benachrichtigung löschen"]').should(
          "have.length",
          4,
        );
      });
    });

    it("deletes all notifications", () => {
      cy.visitPortal("/index.html");
      cy.get('[aria-label="Benachrichtigungen"]').as("toggle");
      cy.get("@toggle").click();
      cy.get("#notifications-dropdown").as("dropdown").should("exist");
      cy.get("@dropdown").within(() => {
        cy.contains("button", "Alle löschen").click();
        cy.contains("button", "Alle löschen").should("be.disabled");
        cy.get(".content").contains("Keine Benachrichtigungen");
      });
      cy.get("@toggle").get(".circle").should("be.hidden");
    });

    it("delete single notification", () => {
      cy.visitPortal("/index.html");
      cy.get('[aria-label="Benachrichtigungen"]').as("toggle");
      cy.get("@toggle").click();
      cy.get("#notifications-dropdown").as("dropdown").should("exist");
      cy.get("@dropdown").within(() => {
        cy.get('[aria-label="Benachrichtigung löschen"]').first().click();
        cy.contains(".subject", "Berger Laura").should("not.exist");
        cy.contains(
          ".subject",
          "Burkhalter Leuenberger Julianne Sophie",
        ).should("exist");
        cy.contains(".subject", "Exemple Amélie").should("exist");
        cy.contains(".subject", "Muster Anna").should("exist");
      });
      cy.get("@toggle").get(".circle").should("be.visible").contains("3");
    });
  });
});
