const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, config) {
      // ...existing code...
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      saucedem0_url: "www.saucedemo.com",
      orangehrm_url:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      username: "Admin",
      password: "admin123",
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5000,
  },
});
