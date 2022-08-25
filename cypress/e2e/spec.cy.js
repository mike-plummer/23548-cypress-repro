describe('session/local storage spec', () => {

  it('should maintain data', () => {
    // custom command, see cypress/support/commands.js
    cy.setupReproSession()

    // Visit a website - remember that cy.session clears out the page and
    // all session data before it runs, so any cy.visit for testing after
    // session setup is complete needs to occur *after*
    cy.visit('https://example.cypress.io')

    // Validate that the cookie we set during our "auth" cycle in session setup still exists
    cy.getCookie('cypress.item').should('have.property','value', 'COOKIE')
    // Validate that the session & local storage items we set during our "auth" cycle in session
    // setup still exist
    cy.window().then((win) => {
      expect(win.sessionStorage.getItem('cypress.item')).to.equal('SESSION_VALUE')
      expect(win.localStorage.getItem('cypress.item')).to.equal('LOCAL_VALUE')
    })
  })
})
