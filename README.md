# Automation Code Challenge
## The gratest factorial calculator!

**Here are the instructions to run the project tests.**

**For the bug report go to [Bug Report](./bug-report/README.md).**

**For the api calls documentation go to [Api Calls](./api-calls/READMIN.MD).**

## Web Application

<img src="bug-report/images/landing-page.png" width="550px">

### Description: 

The main function of the system is calculate the factorial of the given number.

`https://qainterview.pythonanywhere.com/`

This image represents a simplified version of the system

<img src="/images/system.png" width="400px">

## Instructions to Run the tests

**0. Pre-requisites**

  1. Have npm / [Node](https://nodejs.org/) version 12 and above
  2. Have [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) installed on the system
  3. Have installed Firefox browser
  4. Open the project with VSCode or any other IDE

**1. Clone this project with** 

```bash
## clone this repot to a local directory
git clone https://github.com/krantos/code-challenge-factorial.git

## cd into the cloned repo
cd code-challenge-factorial

## install the node_modules
npm install
```

**2. Run the tests**

```bash
# run the e2e tests 
node tests/e2e-run-tests.js
```
<img src="/images/running_tests_e2e.gif" width="100%">

**3. Generate the report**

To get the report, first we need to merge each report generated per each feature file. 

```bash
# merge the json generated and generate a new report
npm run report
```

Found the report in `./cypress/report/index.html`, and open it with a browser.


<img src="/images/report_itself.png" width="650px">

**4. Run the tests with the Cypress runner**

Open Cypress with

```bash
npm run cypress:open 
```

<img src="/images/cypress_runner.png" width="650px">

**Select the browser and then select the test to run**

<img src="/images/test_running_with_cypress_ui_runner.png" width="650px">

**5. Generate a report for tests runned in the Cypress ui**

Generate the report with

```bash
# clean previous reports
npm run clean:reports

# generate the second report
npm run ui:report
```

Find the output in `./cypress/cucumber-json/report/`
This is a different report from the previous one.

<img src="/images/report-2.png" width="650px">

**6. Clean the reports and screenshots**

```bash
# clean the reports and screenshots
npm run clean:reports
```

## Extra

Run a test with a mocked server in a headless browser with:

```bash
node tests/mocked-server.js
```

And get the report with
```bash
# merge the json generated and generate a new report
npm run report
```

Finally don't forget to clean the reports, if not, you will mix previous results.
```bash
# clean reports
npm run clean:reports
```

## Features described with Cucumber

```cucumber
Feature: Calculate the factorial of a number

  Scenario Outline: Calculate the factorial of a positive integer
    Given I open the Greatest Factorial Calculator
    And enter <number> number
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
    And enter -5 number
    When calculation is performed
    Then I should receive: 'Please enter a positive integer'

  Scenario: Calculate the factorial of a decimal number
    Given I open the Greatest Factorial Calculator
    And enter 2.5 number
    When calculation is performed
    Then I should receive: 'Please enter an integer'

  Scenario: Calculate the factorial of a letter
    Given I open the Greatest Factorial Calculator
    And enter e number
    When calculation is performed
    Then I should receive: 'Please enter an integer'
```