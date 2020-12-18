/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on('file:preprocessor', cucumber())


  // on('afterAll', () => {
  //
  //   const newPath = 'cypress/reports/html/screenshots/' + details.name + '.png';
  //   const cleanPath = newPath.replace('#', '');
  //
  //   return new Promise((resolve, reject) => {
  //     // fs.rename moves the file to the existing directory 'new/path/to'
  //     // and renames the image to 'screenshot.png'
  //     fs.rename(details.path, cleanPath, (err) => {
  //       if (err) return reject(err)
  //
  //       // because we renamed and moved the image, resolve with the new path
  //       // so it is accurate in the test results
  //       resolve({path: cleanPath})
  //     })
  //   })
  // })
}
// `config` is the resolved Cypress config

