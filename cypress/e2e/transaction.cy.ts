describe('validate transaction', () => {
  it('Make a new transaction', () => {
    cy.visit('/login');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('123123')
    cy.get('#trigger').click();
    cy.get('#btc').click();
    cy.contains("Swap")
    cy.get('#swap').should("be.disabled")
    cy.screenshot()
    cy.get('#qty').type("0.001");
    cy.get('#coin').select(1)
    cy.get('#swap').should("be.enabled")
    cy.screenshot()
    cy.get('#swap').click()
  });
});
