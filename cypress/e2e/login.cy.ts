describe('validate log in', () => {
  it('Log in', () => {
    cy.visit('/login');
    cy.screenshot()
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('123123')
    cy.get('#trigger').click();
    cy.contains('Bitcoin')
    cy.screenshot()
  });
});
