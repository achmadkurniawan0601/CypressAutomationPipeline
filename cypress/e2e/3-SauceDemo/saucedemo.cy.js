import LoginPage from "../../support/POM/userPage";
const userr = require("../../fixtures/user.json");
describe("test saucedemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("TC01_Login with Hardcode", () => {
    cy.get("#user-name").type("standard_user"); // for ID
    cy.get('input[name="password"]').type("secret_sauce"); //for Name
    cy.get('[data-test="login-button"]').click(); //for data-test
    cy.get('[data-test="title"]').should("have.text", "Products");

    // Checkout item
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 1);
    cy.get("[data-test='checkout']").click();
    cy.get('[data-test="firstName"]').type("Achmad");
    cy.get('[data-test="lastName"]').type("Kurniawan");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
    cy.get(".summary_info").should("be.visible");
    cy.get('[data-test="finish"]').click();
    cy.contains("Thank you for your order!").should("be.visible");
  });

  it("TC02_Login with POM", () => {
    LoginPage.inputUsername(userr[0].username);
    LoginPage.inputPassword(userr[0].password);
    LoginPage.clickLoginButton();
    LoginPage.verifyProduct(userr[0].title);
  });

  it.only("TC03_Login with Driven Data Test with JSON", () => {
    cy.visit("https://www.saucedemo.com/");
    LoginPage.inputUsername(userr[1].username);
    LoginPage.inputPassword(userr[1].password);
    LoginPage.clickLoginButton();
    LoginPage.verifyErrorMessage(userr[1].errorMessage);
  });
});
