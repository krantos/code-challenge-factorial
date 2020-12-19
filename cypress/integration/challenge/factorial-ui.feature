Feature: The Greatest Factorial Calculator UI Elements

  Background:
    Given I open the Greatest Factorial Calculator

  Scenario: The calculator has a cool title
    When the calculator load is complete
    Then I see 'Factorial!' in the title

  Scenario: The calculator has an available input field
      When the calculator load is complete
      Then I should have a place to enter a number

  Scenario Outline: The calculator presents the UI elements
    When the calculator load is complete
    Then I should see a <role> with <text>

    Examples:
    | role    | text                                  |
    | button  | 'Calculate!'                          |
    | h1      | 'The greatest factorial calculator!'  |
    | a       | 'Terms and Conditions'                |
    | a       | 'Qxf2 Services'                       |
