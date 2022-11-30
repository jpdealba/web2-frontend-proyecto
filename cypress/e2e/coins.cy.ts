describe('validate coin', () => {
  it('Navigate to coin', () => {
    cy.visit('/home');
    cy.get('#btc').click();
    cy.contains('Transactions')
    cy.screenshot()
  });
});
