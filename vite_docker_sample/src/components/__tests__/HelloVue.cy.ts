import HelloWorld from "../HelloVue.vue";

describe("HelloVue", () => {
  it("playground", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });
});
