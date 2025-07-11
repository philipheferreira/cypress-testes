// operação padrão para teste automatizado da pagina form

describe('Página JavaScript Puro', () => {
  it('deve mostrar saudação com o nome digitado', () => {
    cy.visit('http://localhost:8080/index.html') // acessa essa porta web para começar os testes
    cy.get('#nome').type('Philiphe') // identifica o campo nome e digita philiphe
    cy.contains('button', 'Enviar').click() // identifica o contains button e utiliza a operação clicar
    cy.get('#resultado').should('contain', 'Olá, Philiphe!') // Pega o campo id resultado e identifica que deve ter Olá, Philiphe para confirmar que funcionou
  })
})