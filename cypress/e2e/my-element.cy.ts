describe.skip("template spec", () => {
  it("passes", () => {
    cy.visit("/index.html");
    cy.contains("Willkommen bei Evento");
  });
});
