import {Then} from "cypress-cucumber-preprocessor/steps";

Then('I should have a place to enter a number', () => {
  cy.get('#number').should('have.attr', 'placeholder', 'Enter an integer')
  cy.get('#number').type(32);
});


Then('I should see {} {word} with {string}', (a, role, text) => {
  cy.contains(text).should('match', role);
})