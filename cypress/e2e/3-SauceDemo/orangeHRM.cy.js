//a
describe("test orang HRM", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it.only("TC01_Dropdown, checkbox, dan radio button di OrangeHRM", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/web/index.php/dashboard/index");
    cy.wait(5000);

    // masuk ke menu My Info
    cy.contains("My Info").click();
    cy.get('#app [name="firstName"]').click();
    cy.get('#app [name="firstName"]').clear();
    cy.get('#app [name="firstName"]').type("Achmad");
    cy.get('#app [name="middleName"]').clear();
    cy.get('#app [name="middleName"]').type("Kurniawan");
    cy.get(
      "#app div:nth-child(2) > div.oxd-input-group > div:nth-child(2) > div.oxd-select-wrapper > div.oxd-select-text > div.oxd-select-text--after > i.oxd-icon"
    ).click();
    cy.get(
      "#app div:nth-child(2) > div.oxd-input-group > div:nth-child(2) > div.oxd-select-wrapper > div.oxd-select-text > div.oxd-select-text--after > i.oxd-icon"
    ).click();
    cy.get(
      "#app div:nth-child(2) > div:nth-child(2) > div.oxd-radio-wrapper > label > span.oxd-radio-input"
    ).click();
    cy.get('#app input[value="2"]').check();
    cy.get(
      "#app div:nth-child(1) > form.oxd-form > div.oxd-form-actions > button.oxd-button"
    ).click();
    cy.contains("Successfully Updated").should("be.visible");
  });
});
