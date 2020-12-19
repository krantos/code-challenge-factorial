Feature: Calculate the factorial of a number

  Scenario Outline: Calculate the factorial of a positive integer
    Given I open the Greatest Factorial Calculator
    And enter <number> as number
    When calculation is performed
    Then I should receive: 'The factorial of <number> is: <result>'

    Examples:
      | number | result |
      | 0      | 1      |
      | 1      | 1      |
      | 2      | 2      |
      | 3      | 6      |
      | 4      | 24     |
      |171     | 1.241018070217667e+309|

  Scenario: Calculate the factorial of a negative integer
    Given I open the Greatest Factorial Calculator
    And enter -5 as number
    When calculation is performed
    Then I should receive: 'Please enter a positive integer'

  Scenario: Calculate the factorial of a decimal number
    Given I open the Greatest Factorial Calculator
    And enter 2.5 as number
    When calculation is performed
    Then I should receive: 'Please enter an integer'

  Scenario: Calculate the factorial of a letter
    Given I open the Greatest Factorial Calculator
    And enter e as number
    When calculation is performed
    Then I should receive: 'Please enter an integer'