import Papa from "papaparse";

describe("Login dengan data dari CSV", () => {
  describe("Percobaan Login 3 Kali dengan data CSV", () => {
    it("Melakukan login sebanyak 3 kali", () => {
      cy.fixture("credentials.csv").then((csvData) => {
        const result = Papa.parse(csvData, { header: true });
        const validUsers = result.data.filter(
          (user) => user.username && user.password
        );
        if (validUsers.length === 0) {
          throw new Error("Data CSV kosong atau tidak valid");
        }
        for (let i = 0; i < 3; i++) {
          const user = validUsers[i % validUsers.length];
          cy.visit("https://www.saucedemo.com/");
          cy.get('[data-test="username"]').type(user.username);
          cy.get('[data-test="password"]').type(user.password);
          cy.get('[data-test="login-button"]').click();
          cy.screenshot("percobaan-login-" + i);
          cy.reload();
        }
      });
    });
  });
});
