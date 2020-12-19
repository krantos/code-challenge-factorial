# Report and Process

Here are the bugs found while testing the web application *The Greatest Factorial Calculator*

[Bugs Found](#bugs-found)
[Suggeested Improvemts](#suggested-improvements)
[Next Steps...](#next-steps...)

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

These reports are generic, each one contains the needed information.
Consider that they can vary for these reasons:
* Report tool choose
* Team agreement on how to report a bug
* If the bug should be tagged with an Epic or not
* If the team requires the debug report also

**Expected / Suggestions**

Each Expected behavior/ui made for each bug, is only a suggestion. Those suggestions should be validated and approved by the Product Owner before made the changes. Could be the scrum team who takes the decision. Or the Force.


***The bugs are not in a particular order but, with the correct tool they could be ordered by priority or severity***

---
# Bugs Found
***
## Bug 1: Web app cannot parse server result response for a range of numbers (between 170 and 990) 
***
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
* **Expected:** Show the result of the factorial calculation for big numbers
* **Current:** Result displayed says 'Infinity'
* **Type:** Functional

### Steps to reproduce

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Open the web console (i.e: press f12)
4. Click on the Input text where it says: "Enter an Integer"
5. Enter a positive integer between 170 and 990 | (170 < integer > 990)
6. Click on the "Calculate!" green button
7. Validate that the result is displayed
8. **Expected:** show the result with scientific notation (example) 1.35393750e+156
9. **Current:** the displayed results says 'Infinity' 

### Attachments/
<img src="/bug-report/images/bug-1.gif" width="650px">

***
## Bug 2: Internal Server Error when a negative number is sent to calculate
***

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Postman
    * **Version:** Postman v7.36.0
* **Priority:** HIGH
* **Status:** New
* **Severity:** CRITICAL
* **Expected:** When a negative number is sent to calculate its factorial, then the server returns: 500 Internal Server Error
* **Current:** In this case could be a 400 status code with an error message. (Validate with the PO)
* **Type:** No Functional

### Steps to reproduce

1. Open Postman
2. Set a POST request
3. URL: http://qainterview.pythonanywhere.com/factorial
4. Go to the Body tab
5. Choose 'form-data' type
6. Add Key: number
7. Add Value: -1
8. Send the request
9. Validate that response is an eror (validate with the PO)
10. **Expected:** Status code 400 - Bad Request or a message indicating the error (validate with the PO)
11. **Current:** Status code 500 - Internal Server Error

### Attachments

<img src="/bug-report/images/bug-2.png" width="650px">

***
## Bug 3: Internal Server Error when integers greater than 989 are entered to calculate 
***

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Postman
    * **Version:** Postman v7.36.0
* **Priority:** HIGH
* **Status:** New
* **Severity:** CRITICAL
* **Expected:** When a negative number is sent to calculate its factorial, then the server returns: 500 Internal Server Error
* **Current:** In this case could be a 400 status code with an error message. (Validate with the PO)
* **Type:** No Functional

### Steps to reproduce

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Open the web console (i.e: press f12)
4. Click on the Input text where it says: "Enter an Integer"
5. Enter a positive integer greater than 989
6. Click on the "Calculate!" green button
7. **Expected:** Status code 400 - Bad Request or a message indicating the error (validate with the PO)
8. **Current:** Status code 500 - Internal Server Error

### Attachments

<img src="/bug-report/images/bug-3.gif" width="650px">


***
## Bug 3: No error message while entering a negative number for factorial calculation
****

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
* **Expected:** An error message indicating that the factorial calculation its only for positive integers.
* **Current:** Web/UI: No message. No signs of life
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Open the network (tab) monitor in the broser
3. Navigate to this url: http://qainterview.pythonanywhere.com/
4. Click on the Input text where it says: "Enter an Integer"
5. Enter a negative integer number lower than 0 (i.e: -1)
6. Click on the "Calculate!" green button
7. **Expected:**
    1. Any type of message indicating that the factorial calculation is only for positive integers. (Validate with the PO)
    2. No POST request to the server due to that the number doesn't comply with the policy
8. **Current:** No message. No signs of life 

### Attachments:

<img src="/bug-report/images/bug-4.gif" width="650px">

****
## Bug 4: Console is loggin development info
****

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
* **Expected:** No logs in the web console
* **Current:** Web/UI: Logs information (see steps)
* **Type:** No Functional - Security issue as expose development information

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Open the web console (i.e: press f12)
4. Click on the Input text where it says: "Enter an Integer"
5. Enter a positive integer number lower than 10 (i.e: 5)
6. Click on the "Calculate!" green button and, validate there is no information logged in the web console
7. **Expected:** In the web console tab no internal information logged
8. **Current:** It logs interal information. 
   1. The value entered in the input field 
   2. A hello message which says: 'Hello! I am in the done part of the ajax call'
   3. A javascript object that includes the server response.
    

9. **(From step 4)** Enter a letter in the input field
10. Click on the "Calculate!" green button and validate there is no information logged in the web console
11. **Expected:** No information logged in the web console.
12. **Current:** The entered value is logged

### Attachments:

<img src="/bug-report/images/bug-5.gif" width="650px">

****
## Bug 5: Typo in the Page Title
****

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

****
## Bug 6: Pressing Intro after enter a number doesn't produce an action
****

### Information

* **Reporter:** Marcos
* **Date:** 12/18/2020
* **Product:** Factorial Calculator
* **Platform:** Web
* **Tested in:**
    * **System:** Windows 10 Enterprise
    * **Browser:** Firefox Browser Developer
    * **Version:** 85.0b1 (64-bit)
* **Priority:** Medium (Validate with the PO)
* **Status:** New
* **Severity:** Major (Validate with the PO)
* **Expected:** The factorial calculation is performed and show the result (validate with the PO)
* **Current:** No actions performed
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the Input text where it says: "Enter an Integer"
4. Enter a positive integer number lower than 10. (i.e: 5)
5. Press the key Intro
6. **Expected:** The factorial calculation is performed and show the result
7. **Current:** No actions performed

### Attachments:

<img src="/bug-report/images/intro_key.gif" width="750px">

****
## Bug 7: Arrow button like icon simulates a Button but doesn't perform any action (could be a bug - needs confirmation)
****

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
* **Severity:** Trivial (Validate with the PO)
* **Expected:** Pressing the button like with the arrow icon performs the caculations (same action as clickin the green button)
* **Current:** No action performed
* **Type:** Functional | UI (needs confirmation)

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the Input text where it says: "Enter an Integer"
4. Enter a positive integer number lower than 10. (i.e: 5)
5. Click the arrow button like in the left of the input text
6. **Expected:** Some type of action OR other type of element not similar to a button
7. **Current:** no actions performed

### Attachments:

<img src="/bug-report/images/arrow_button_like.gif" width="650px">


****
## Bug 8: Favicon cann't be loaded 404 - NOT FOUND
****

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

****
## Bug 9: http over https - Connection no Secure | Missing redirect from http to https
****

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
* **Type:** No Functional | Infraestructure

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. **Expected:** Redirect to http://qainterview.pythonanywhere.com/
4. **Current:** no redirect performed and the user stays in the no secure http

### Attachments:

<img src="/bug-report/images/connection_no_secure_http.png" width="650px">

****
## Bug 10: Terms and Conditions link redirects to the wrong page 
****

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
* **Current:** Clicking on 'Terms and Conditions' link redirect to /privacy
* **Type:** Functional

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the link 'Terms and Conditions'
3. **Expected:** Clicking on 'Terms and Conditions' should redirect to /terms
4. **Current:** Clicking on 'Terms and Conditions' link redirect to /privacy

### Attachments:

<img src="/bug-report/images/terms_and_conditions_link.gif" width="650px">

****
## Bug 10: Privacy link redirects to the wrong page 
****

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
* **Current:** Clicking on 'Privacy' link redirect to /terms
* **Type:** Functional 

### Steps to reproduce:

1. Open any browser
2. Navigate to this url: http://qainterview.pythonanywhere.com/
3. Click on the link 'Privacy'
4. **Expected:** Clicking on 'Privacy' should redirect to /privacy
5. **Current:** Clicking on 'Privacy' link redirect to /terms

### Attachments: 

<img src="/bug-report/images/links_cause.png" width="650px">


****
## Bug 11: UI color change with iExplorer 11
****

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

***
# Suggested Improvements

**1. Server Response:** Instead of a response with the raw result number of the factorial calculation, sent an already formated number with scientific notation. This could prevent the Infinity Bug caused by javascript when tries to parse the response number.

**2. Result position and size:** Currently the response includes a text plus the actual result number. As it is, is difficult to read. My suggestion is, present the result with a bigger font, without the text and between the title and the input field. Like in this image:

<img src="/bug-report/images/suggestion.png" width="650px">

***
# Next Steps...
Depending on the priority/severity a bug report can be added into the sprint to be fixed under a Hot-Fix process. If this isn't the case, a bug would be added to the Backlog to be selected, analysed, stimated and added to the next Sprint backlog to be worked.

Its considered a good practice add one test case per bug found. So this test case would be part of the sanity check after the fix was made. Then could be part of the next set of tests for a Regression over the system.
