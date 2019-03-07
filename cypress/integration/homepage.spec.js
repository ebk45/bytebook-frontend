describe("Homepage", () => {
  it("can visit the homepage", () => {
    cy.visit("/");
  });

  it("contains form to submit bytes", () => {
    cy.visit("/");
    cy.contains("Byte Me!");
    cy.get("input[name=email]").type("email");
  });

  it("displays bytes", () => {
    cy.visit("/");
    cy.contains("BYTE TIME:");
  });
});
