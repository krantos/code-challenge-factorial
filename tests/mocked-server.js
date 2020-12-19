const cypress = require('cypress');

cypress.run({
  reporter: 'cypress-multi-reporters',
  configFile: 'cypress-2.json',
  reporterOptions: {
    configFile: './tests/reporter-config.json'
  },
  screenshotsFolder: 'cypress/screenshots/',
  testFiles: "**/*.js",
  browser: 'firefox',
  spec: 'cypress/integration/mocked-server/*',
  config: {
    baseUrl: 'http://qainterview.pythonanywhere.com/',
    video: false
  }
})
    .then((results) => {
      console.log(results);

    })
    .catch((err) => {
      console.log(err);
    });