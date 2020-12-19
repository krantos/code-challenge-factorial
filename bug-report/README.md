# Bug Report and Process

Here are the bugs found while testing the web application *The Greatest Factorial Calculator*

[Bugs Found](#bugs-found)

[Lighthouse Analysis Report](#lighthouse-report)

[Suggeested Improvemts](#suggested-improvements)

[Next Steps...](#next-steps)

### App description

**Main functionality** 

Calculate the factorial of the given number
and present the result to the user.

**Architecture**

The system is composed by two sub-systems.

  * Web Application: which has the form to enter the number, ask for the calculation, and present the result.

  * Server: who receives the petition to calculate the factorial and return
the result.

**Bug Report**

These reports are generic, each one contains the needed information to be reproduced.

Consider that they can vary in form and details depending on:

* Report tool choose
* Team agreement on how to report a bug
* If, the bug should be tagged with an Epic or not
* If, the team requires the Debug report

**Expected / Suggestions**

Each Expected point for each bug, is only a suggestion. This should be validated and approved by the Product Owner before made the changes. Could be the Scrum team who takes the decision. Or the Force.


***The bugs are not in a particular order but, with a tool they could be ordered by priority or severity***

---
# Bugs Found

## Bug 1: (UI) Web app cannot parse the result sent from the server. It happens for a range of numbers (between 170 and 990) 

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** HIGH
* **Status:** New
* **Severity:** BLOCKER
* **Expected:** Display the result of the factorial calculation for numbers between 170 and 990
* **Current:** The result displayed says 'Infinity'
* **Type:** Functional

### Steps to reproduce

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Open the web console (i.e: press f12)
4. Click on the input field where it says: "Enter an Integer"
5. Enter a positive integer between 170 and 990 | (170 < integer > 990)
6. Click on the "Calculate!" green button
7. Validate that the correct result is displayed (check with a calculator)
8. **Expected:** display the result with scientific notation, example: 1.35393750e+156
9. **Current:** the displayed results says 'Infinity' 

### Attachments/
<img src="/bug-report/images/bug-1.gif" width="650px">


## Bug 2: (Server) Internal Server Error when a negative number is sent


* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Server
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Postman
    * **Version:** Postman v7.36.0
* **Priority:** HIGH
* **Status:** New
* **Severity:** CRITICAL
* **Expected:** When a negative number is sent to calculate its factorial, then the server returns: 500 Internal Server Error
* **Current:** In this case could be a 400 status code with an error message. (Validate with the PO)
* **Type:** Functional 

### Steps to reproduce

1. Open Postman
2. Set a POST request
3. URL: http://qainterview.pythonanywhere.com/factorial
4. Go to the Body tab
5. Choose 'form-data' type
6. Add Key: number
7. Add Value: -1
8. Send the request
9. Validate that response is an error (validate with the PO)
10. **Expected:** Status code 400 - Bad Request, or a message indicating the error (validate with the PO)
11. **Current:** Status code 500 - Internal Server Error

### Attachments

<img src="/bug-report/images/bug-2.png" width="650px">


## Bug 3: (Server) Internal Server Error when integers greater than 989 are introduced to calculate. Limit


* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Server
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** HIGH
* **Status:** New
* **Severity:** BLOCKER
* **Expected:** Could be a 400 status code with an error message that the limit was reached, or the result with scientific notation (Validate with the PO)
* **Current:** The server returns: 500 Internal Server Error
* **Type:** Functional

### Steps to reproduce

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Open the web console (i.e: press f12)
4. Click on the input field where it says: "Enter an Integer"
5. Enter a positive integer greater than 989
6. Click on the "Calculate!" green button
7. **Expected:** Could be a 400 status code with an error message that the limit was reached, or the result with scientific notation (Validate with the PO)
8. **Current:** Status code 500 - Internal Server Error

### Attachments

<img src="/bug-report/images/bug-3.gif" width="650px">



## Bug 4: (UI) No error message when calculation is asked for a negative number


### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** MEDIUM
* **Status:** New
* **Severity:** MINOR
* **Expected:** An error message indicating that the factorial calculation its only for positive integers. (ask for validation about the message to be displayed)
* **Current:** UI doesn't display any message or change / As the number was not validate the POST request to the server is performed.
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the input field where it says: "Enter an Integer"
4. Enter a negative integer (i.e: -5)
5. Click on the "Calculate!" green button
6. **Expected:**
    1. Any type of message indicating that the factorial calculation is only for positive integers. (Validate with the PO)
    2. No POST request action to the server due to that the number doesn't comply with the rules
7. **Current:** No message. No signs of life 

### Attachments:

<img src="/bug-report/images/bug-4.gif" width="650px">


## Bug 5: (UI) Web App is printing development information in the console


### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** HIGH
* **Status:** New
* **Severity:** Major - expose internal information
* **Expected:** No logs in the web console. No console.log() in production code
* **Current:** Web/UI: Logs information (see steps)
* **Type:** No Functional - Could be Security issue as it expose development information

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Open the web console (i.e: press f12)
4. Click on the input field where it says: "Enter an Integer"
5. Enter a positive integer number lower than 10 (i.e: 5)
6. Click on the "Calculate!" green button and, validate that there is no information logged in the web console tab
7. **Expected:** No logs in the web console. No console.log() in production code
8. **Current:** Per calculation the web app prints development information 
   1. The value entered in the input field 
   2. A hello message which says: 'Hello! I am in the done part of the ajax call'
   3. A javascript object that includes the server response.
    

9. **(From step 4)** Enter a letter in the input field
10. Click on the "Calculate!" green button and validate there is no information logged in the web console
11. **Expected:** No logs in the web console. No console.log() in production code.
12. **Current:** The entered value is logged

### Attachments:

<img src="/bug-report/images/bug-5.gif" width="650px">


## Bug 6: (UI) Typo in the Page Title


### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** Low
* **Status:** New
* **Severity:** Trivial
* **Expected:** Factorial! (validate with the PO)
* **Current:** Factoriall
* **Type:** UI

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Look for the Page title that appears in the tab, an validate that the title says: Factorial!
4. **Expected:** Factorial!
5. **Current:** Factoriall

### Attachments:

<img src="/bug-report/images/title.png" width="750px">


## Bug 7: (UI) Pressing Intro on the keyboard, after enter a number, doesn't perform the calculation

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** MEDIUM (Validate with the PO)
* **Status:** New
* **Severity:** MAJOR (Validate with the PO)
* **Expected:** Pressing the Intro key performs the factorial calculation
* **Current:** No actions performed
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the input field where it says: "Enter an Integer"
4. Enter a positive integer number lower than 10. (i.e: 5)
5. Press the Intro key on the keyboard
6. **Expected:** The factorial calculation is performed, and the result is shown
7. **Current:** No actions performed

### Attachments:

<img src="/bug-report/images/intro_key.gif" width="750px">


## Bug 8: (UI) Arrow icon simulates to be a Button but, it doesn't perform any action (could be a bug - needs confirmation)

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** MINOR
* **Status:** New
* **Severity:** TRIVIAL (Validate with the PO)
* **Expected:** Clicking on the arrow icon should perform the calculation (same action as click on the green button)
* **Current:** No action performed
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the input field where it says: "Enter an Integer"
4. Enter a positive integer number lower than 10. (i.e: 5)
5. Click the arrow icon on the left of the input field
6. **Expected:** Complete the calculation
7. **Current:** no actions observed

### Attachments:

<img src="/bug-report/images/arrow_button_like.gif" width="650px">



## Bug 9: (Server) Favicon cannot be loaded 404 - NOT FOUND

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** Minor
* **Status:** New
* **Severity:** Trivial
* **Expected:** The web page has a cool favicon
* **Current:** 
* **Type:** UI

### Steps to reproduce:

1. Open any browser
2. Open the web console (i.e: press f12)
3. Navigate to this url: http://qainterview.pythonanywhere.com/
4. **Expected:** favicon.ico is properly loaded (200 OK + the file). 
5. **Current:** 404 NOT FOUND
6. Check the Network tab, it also indicates that the browser couldn't load the favicon.ico

### Attachments:

<img src="/bug-report/images/favicon_404.png" width="650px">


## Bug 10: (Server) http over https - Connection no Secure | Missing redirect from http to https

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** HIGH
* **Status:** New
* **Severity:** CRITICAL
* **Expected:** A secure connection with HTTPS (missing redirect) 
* **Current:** HTTP connection
* **Type:** No Functional | Infrastructure

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. **Expected:** Redirect to https://qainterview.pythonanywhere.com/
4. **Current:** no redirect happens, and the user stays in the no secure http

### Attachments:

<img src="/bug-report/images/connection_no_secure_http.png" width="650px">


## Bug 11: (UI) Terms and Conditions link id redirecting to the wrong page

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** MEDIUM
* **Status:** New
* **Severity:** MINOR
* **Expected:**  Clicking on 'Terms and Conditions' should redirect to /terms
* **Current:** Clicking on 'Terms and Conditions' link is redirecting to /privacy
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the link 'Terms and Conditions'
3. **Expected:** Clicking on 'Terms and Conditions' should redirect to /terms
4. **Current:** Clicking on 'Terms and Conditions' link is redirecting to /privacy

### Attachments:

<img src="/bug-report/images/terms_and_conditions_link.gif" width="650px">


## Bug 12: (UI) Privacy link is redirecting to the wrong page

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** MEDIUM
* **Status:** New
* **Severity:** MINOR
* **Expected:**  Clicking on 'Privacy' should redirect to /privacy
* **Current:** Clicking on 'Privacy' link is redirecting to /terms
* **Type:** Functional 

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the link 'Privacy'
4. **Expected:** Clicking on 'Privacy' should redirect to /privacy
5. **Current:** Clicking on 'Privacy' link is redirecting to /terms

### Attachments: 

<img src="/bug-report/images/links_cause.png" width="650px">

## Bug 13: (UI) Title color change with iExplorer 11

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** IExplorer 
    * **Version:** 11.00.19041.1
* **Priority:** LOW
* **Status:** New
* **Severity:** TRIVIAL
* **Expected:**  'The greatest factorial calculator!' doesn't display the proper color from css. 
* **Current:** 'The greatest factorial calculator!' is displayed in black color
* **Type:** UI 

### Steps to reproduce:

1. Open any IExplorer 11
2. Navigate to this url: https://qainterview.pythonanywhere.com/
3. Validate that the title 'The greatest factorial calculator!' has the color set by design
3. **Expected:** 'The greatest factorial calculator!' doesn't display the proper color from css. 
4. **Current:** 'The greatest factorial calculator!' is displayed in black color

### Attachments: 

<img src="/bug-report/images/iExplorer_diff.png" width="650px">


# Lighthouse Analysis Report

Using the Lighthouse automated tool, developed by Google, we can have more quality details.

The report analysis presents its information with indicators, and interesting points to consider.

<img src="/bug-report/images/lighthouse_1.png" width="650px">

One helpful feature is the javascript analyzer which can tell us about some vulnerabilities in the app.

<img src="/bug-report/images/lighthouse_2.png" width="650px">

# Suggested Improvements

**1. Server Response:** Instead of a factorial response with the raw result number, would be a good option to, send an already formatted result with scientific notation. This could prevent the Infinity Bug caused by javascript when tries to parse the response number.

**2. Result position and size:** Currently the UI displays the response with a text, and the result number. As it is, is difficult to read. My suggestion is, present the result with a bigger font, without the text and between the title and the input field. Like in this image:

<img src="/bug-report/images/suggestion.png" width="650px">


# Next Steps

Depending on the priority/severity of a reported bug, it can be added into the current sprint to be fixed (Hot-Fix). If isn't the case, a bug ticket will be added to the Backlog. Next it goes throught a selection process, analysis, estimation and finally is added to the next Sprint Backlog to be worked.

It is considered a good practice add one test case per bug found. Then, this test case will be part of the Sanity Check after the bug fix was made. Also, could be part of the next set of Regression tests over the system.
