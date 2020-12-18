import {When, Then} from "cypress-cucumber-preprocessor/steps";

When('I ask for the {string} information', (text) => {
  cy.contains(text).click()
});

Then('I should receive the {string} information under {word}', (title, path) => {
  cy.contains(title).should('be.visible');
  cy.url().should('include', path);
})


Then('I should see {} {word} with {string}', (a, role, text) => {
  cy.contains(text).should('match', role);
})