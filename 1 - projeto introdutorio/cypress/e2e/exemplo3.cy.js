// operação simulando a operação de click manual no botão

describe('Página JavaScript Puro', () => {
  it('deve mostrar saudação com o nome digitado', () => {
    cy.visit('http://localhost:8080/index.html') // acessa essa porta web para começar os testes
    cy.get('#nome').type('Philiphe') // identifica o campo nome e digita philiphe
    // INICIO DA SIMULAÇÃO DO CLICK DE FORMA MANUAL
    cy.contains('button', 'Enviar')
      .trigger('mouseover')
      .wait(1000) // tempo antes do clique
      .click()
    // FIM DA SIMULAÇÃO DO CLICK DE FORMA MANUAL
    cy.get('#resultado').should('contain', 'Olá, Philiphe!') // Pega o campo id resultado e identifica que deve ter Olá, Philiphe para confirmar que funcionou
  })
})