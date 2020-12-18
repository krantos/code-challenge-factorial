const report = require('multiple-cucumber-html-reporter');


report.generate({
  jsonDir: 'cypress/cucumber-json/',
  reportPath: 'cypress/cucumber-json/report',
  metadata:{
    browser: {
      name: 'firefox',
      version: '85.0b2 (64-bit'
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10 Enterprise'
    }
  },
  customData: {
    title: 'Challenge',
    data: [
      {label: 'Project', value: 'The Greatest Factorial Calculator'},
      {label: 'Release', value: 'Moon'},
      {label: 'Cycle', value: 'Nebula'},
    ]
  }
});