## AppTestLearning-parabank

## App Tested
**ParaBank**  
A demo banking web application created for educational and testing practice purposes 
(https://parabank.parasoft.com/parabank/)

## Manual Testing
- Manual testing of core user flows 
1. Home page functionality 
2. registration
3. login
- Designed test cases using gherkin's "Given-When-Then" syntax in **parabankTestCases.md**
- Manually executed my designed test cases and doucmented the results in **parabankTestResults.md** (eg: TC-LOGIN-02 failed)
- wrote bug reports in **BugReports.md** (eg: details about TC-LOGIN-02, how to reproduce, severity and priority level, etc.)
The scope of this project was intentionally kept small to focus on getting the fundamentals right.

## Automated Testing
- Simple test automation of a happy-path using Playwright to familiarise myself with an automated tool
- **tests/login-success.spec.js** – A basic Playwright automated test for a successful login scenario (from (TC-LOGIN-01)), where i also intentionally used placeholders for Login and Password input data for security reasons

## What I've Learned
- How to design clearer and structured manual test cases
- How to organise test cases, test results, and bug reports and its importane of doing so
- How testing fits into the Software Development Life Cycle (SDLC)
- How automated tests can complement manual testing
- Common challenges in test automation, such as element selectors, waits, and assertions

## What I've also Experienced
Initially, I manually tested a particular use case, TC-LOGIN-02, once, and assumed that it was okay after it gave an expected result. However, after re-testing certain scenarios again, I realised that my earlier assumptions about system behaviour were incorrect. I tested the use case TC-LOGIN-02 again, which revealed inconsistent results, and I had to update my test results and bug reports.

Through this process, I learned the importance of:
- Re-validating test results instead of assuming initial outcomes are correct
- Letting actual system behaviour drive conclusions rather than expectations
- Updating documentation when new evidence is discovered
- Staying patient and methodical even when application behaviour is confusing or inconsistent

I also learned that testing can be frustrating at times, especially when the system behaves differently across multiple executions. However, this experience reinforced that careful observation, accurate documentation, and willingness to revise findings are what I believe are essential to be an effective application tester.

