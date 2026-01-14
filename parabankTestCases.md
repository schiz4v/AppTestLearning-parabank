TC-HOME-01: Home page loads successfully

Given the user navigates to the ParaBank home page
When the page finishes loading
Then the Customer Login section should be visible
And the Register link should be displayed

TC-REG-01: Successful user registration with valid details

Given the user is on the ParaBank registration page
When the user fills in all required fields with valid information
And submits the registration form
Then a success message indicating account creation should be displayed

TC-LOGIN-01: Login succeeds with valid credentials

Given the user is on the ParaBank home page
When the user enters a valid username and password
And clicks the Log In button
Then the user should be logged in successfully
And account-related options should be visible

TC-LOGIN-02: Login fails with invalid credentials

Given the user is on the ParaBank home page
When the user enters an invalid username or password
And clicks the Log In button
Then an error message should be displayed
And the user should remain logged out