import {Given, When} from "cypress-cucumber-preprocessor/steps";

Given('I open the Greatest Factorial Calculator', () => {
  cy.visit('http://qainterview.pythonanywhere.com/');
});

When('the calculator load is complete', () => {
  //
});