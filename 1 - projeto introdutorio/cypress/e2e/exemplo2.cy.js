describe('Teste com digitação lenta', () => {
  it('deve digitar o nome lentamente', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('#nome').type('Philiphe', { delay: 200 }) // delay aumenta o tempo na ação de digitar nessa operação
    cy.wait(1000) // espera 1 segundo (1000 ms)
    cy.contains('button', 'Enviar').click() // não existe uma operação para delay do click, o cypress trata o click como instantaneo
    cy.get('#resultado').should('contain', 'Olá, Philiphe!')
  })
})