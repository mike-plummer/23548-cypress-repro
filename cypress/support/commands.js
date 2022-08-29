Cypress.Commands.add('setupReproSession', () => {
  cy.session('ABC123', () => {
    cy.visit('https://example.cypress.io')
    // Make a pretend "authorization" request and act on the response
    cy.request('http://www.google.com').then(() => {
      // When the request resolves, set items into session & local storage
      cy.window().then((win) => {
        win.sessionStorage.setItem('cypress.item', 'SESSION_VALUE')
        win.localStorage.setItem('cypress.item', 'LOCAL_VALUE')
      })
    })
    // Set a cookie
    cy.setCookie('cypress.item', 'COOKIE')
  })
})
