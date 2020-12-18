Feature: Get more information about the great Calculator

  Background:
    Given I open the Greatest Factorial Calculator

  Scenario: Get the Terms and conditions information
    When I ask for the 'Terms and Conditions' information
    Then I should receive the 'Terms and Conditions' information under terms

  Scenario: Get the Privacy information
    When I ask for the 'Privacy' information
    Then I should receive the 'Privacy' information under privacy