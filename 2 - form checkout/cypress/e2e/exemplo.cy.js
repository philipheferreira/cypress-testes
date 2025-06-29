describe('Formulário de Checkout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/index.html') // ajuste a porta se necessário
  })

  it('Preenche o formulário e envia', () => {
    // Preenche endereço de cobrança
    cy.get('#fname').type('Philiphe Ferreira')
    cy.get('#email').type('philiphe@email.com')
    cy.get('#adr').type('Av. Brasil, 123')
    cy.get('#city').type('Belém')
    cy.get('#state').type('PA')
    cy.get('#zip').type('66000-000')

    // Preenche pagamento
    cy.get('#cname').type('Philiphe Ferreira')
    cy.get('#ccnum').type('1234 5678 9012 3456')
    cy.get('#expmonth').type('Dezembro')
    cy.get('#expyear').type('2030')
    cy.get('#cvv').type('123')

    // Desmarca checkbox e marca novamente (opcional)
    cy.get('input[name="sameadr"]').uncheck().check()

    // Clique no botão de enviar com delay
    cy.get('.btn').wait(500).click()

    // Aqui poderíamos verificar se a submissão levou a outra página
    // ou se o formulário foi resetado, se houver JS ativo
  })
})