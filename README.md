# Example for [Cypress issue #23548](https://github.com/cypress-io/cypress/issues/23548)

Demonstration of `cy.session` setting and persisting a cookie, sessionStorage, and localStorage value. We use `cy.session` in a custom command and make a mock "authorization" request to retrieve hypothetical auth tokens, setup values, etc. These values are then saved into a cookie, sessionStorage, and localStorage.

## Steps
1. Clone this repository
2. From project root, install dependencies: `npm i`
3. Open test runner: `npx cypress open`
4. Run the single test, it should pass. Note that it:
  * _*Creates*_ a session
  * Cookie, Session Storage, and Local Storage items are set during session creation
  * Visits a website
  * Validates all data items are still accessible and correct
5. Re-run the test, it should still pass. Note that it:
  * _*Restores*_ the session (should use cached session)
  * Performs same validation showing that values are still available with restored session
  