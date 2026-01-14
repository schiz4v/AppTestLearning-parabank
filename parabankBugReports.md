### Bug: Authentication bypass allows login with invalid credentials

**Test Case Reference:**  
TC-LOGIN-02

**Description:**  
The login functionality exhibits inconsistent behaviour when random values are inserted. In some executions, the system allows the user to log in successfully and accesses a random person's existing user account (eg "John Smith", then "Olivia Smith" after reproducing test sometime later). In other executions, the login attempt fails and the system displays the error message "An internal error has occurred and has been logged."

**Steps to Reproduce:**
1. Navigate to the ParaBank home page
2. Enter any random or invalid value into the username field
3. Enter any random or invalid value into the password field
4. Click the Log In button

**Expected Result:**  
The system should reject invalid credentials, display an error message, and prevent access to any user account.

**Actual Result:**  
The system logs the user in successfully and redirects them to a random existing user account.

**Severity:** High  
**Priority:** High

**Notes:**  
This behaviour poses a significant security risk as it allows unauthorized access to any user accounts.