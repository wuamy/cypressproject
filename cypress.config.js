const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    autoOpen: true,
    overwrite: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    watchForFileChanges:false,
    video:false
  },

  
  

});
