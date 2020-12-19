const cypress = require('cypress');

cypress.run({
  reporter: 'cypress-multi-reporters',
  configFile: 'cypress-2.json',
  reporterOptions: {
    configFile: './tests/reporter-config.json'
  },
  screenshotsFolder: 'cypress/screenshots/',
  testFiles: "**/*.js",
  headless: true,
  spec: 'cypress/integration/mocked-server/*',
  config: {
    baseUrl: 'http://qainterview.pythonanywhere.com/',
    video: false
  }
})
    .then((results) => {
      console.log(results);
      console.log('run tests completed');
    })
    .catch((err) => {
      console.log('something went wrong')
      console.log(err);
    });