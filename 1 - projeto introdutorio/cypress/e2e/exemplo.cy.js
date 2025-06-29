describe('Página JavaScript Puro', () => {
  it('deve mostrar saudação com o nome digitado', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('#nome').type('Philiphe')
    cy.contains('button', 'Enviar').click()
    cy.get('#resultado').should('contain', 'Olá, Philiphe!')
  })
})