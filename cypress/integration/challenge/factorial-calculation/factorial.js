import {And, When, Then} from "cypress-cucumber-preprocessor/steps";

And('enter {word} number', (number) => {
  cy.get('#number').type(number);
});

When('calculation is performed', () => {
  cy.get('#getFactorial').click();
});

Then('I should receive: {string}', (result) => {
  cy.get('#resultDiv').should('contain.text', result)
})