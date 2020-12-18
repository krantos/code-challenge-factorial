const cypress = require('cypress');

cypress.run({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'tests/reporter-config.json'
  },
  screenshotsFolder: 'cypress/screenshots/',
  browser: 'firefox',
  spec: './cypress/integration/challenge/**.feature',
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
    })