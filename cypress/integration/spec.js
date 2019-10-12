describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Keep up sara!!! PLEASE!!!!!!!!!");
  });

  it("navigates to /about", () => {
    cy.get("nav a")
      .contains("about")
      .click();
    cy.url().should("include", "/about");
  });

  it("navigates to /blog", () => {
    cy.get("nav a")
      .contains("blog")
      .click();
    cy.url().should("include", "/blog");
  });
});