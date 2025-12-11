class LoginPage {
  username = '[data-test="username"]';
  password = '[data-test="password"]';
  loginBtn = '[data-test="login-button"]';
  errorMsg = '[data-test="error"]';

  inputUsername(name) {
    cy.get(this.username).clear().type(name);
  }

  inputPassword(pass) {
    cy.get(this.password).clear().type(pass);
  }

  clickLoginButton() {
    cy.get(this.loginBtn).click();
  }

  verifyErrorMessage(msg) {
    cy.get(this.errorMsg).should("have.text", msg);
  }
}

export default new LoginPage();
