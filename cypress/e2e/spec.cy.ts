describe('Home Screen Works', () => {
  it('Navigates to Home if not logged in', () => {
    cy.visit('/')
    cy.contains('Bitcoin')
    cy.contains('Ethereum')
  })
})
