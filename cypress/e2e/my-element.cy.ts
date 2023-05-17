describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Vite + Lit");
  });
});
