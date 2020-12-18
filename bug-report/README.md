# Bugs Founded

Here are the bugs found while testing the web application *The Greatest Factorial Calculator*

### App description
**Main functionality** 

Calculate the factorial of the given number
and present the result to the user.

**Architecture**

The system is composed by two sub-systems.

Web Application: which has the form to enter the number and ask for the calculation
and present the result.

Server: who receives the petition to calculate the entered number and returns
the result.

**Bug Report**

These reports are generic, each one contains the basic information.
Consider that they can vary for these reasons:
* Report tool choose
* Team agreement on how to report a bug
* If the bug should be tagged with an Epic or not


**Suggestions**

Each suggestion made for each bug either an improvement, or an expected behavior
is only a suggestion. Those should be validated and approved by the Product Owner 
before made the change. Could be the scrum team who takes the decision.


***The bugs are ordered by severity.***

***

### Bug 1: Web app cannot parse big results

### Bug 2: Internal Server Error when a negative number is sent to calculate
***

|#|Date|Status|Severity|Platform|Priority|Reporter|
|---|-------|------|--------|--------|--------|--------|
|2|18-12-2020|New|Critical|Server|High|Marcos|

###Tested in/with
|OS|Application|Version|
|---|---|---|
|Windows 10|Postman|Postman v7.36.0|


###Description
**Current Behavior:** When a negative number is sent to calculate its factorial, then
the server returns: 500 Internal Server Error

**Expected Behavior:** In this case could be a 400 status code with an error message.
(Validate with the PO)

###Steps to reproduce
1. Open Postman
2. Set a POST request
3. URL: http://qainterview.pythonanywhere.com/factorial
4. Go to the Body tab
5. Choose 'form-data' type
6. Add Key: number
7. Add Value: -1
8. Send the request
6. Expected: Status code 400 - Bad Request or a message indicating the error (validate with the PO)
7. Current Behavior: Status code 500 - Internal Server Error

###Screenshot
<img src="/bug-report/images/bug-2.png" width="50%">



