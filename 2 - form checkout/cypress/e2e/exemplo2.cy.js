describe('Formulário de Checkout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/index.html') // ajuste a porta se necessário
  })

  it('Preenche o formulário e envia', () => {
    // Preenche endereço de cobrança
    cy.get('#fname').type('Philiphe Ferreira', { delay: 200 })
    cy.get('#email').type('philipheferreira@email.com', { delay: 200 })
    cy.get('#adr').type('Av. Brasil, 123', { delay: 200 })
    cy.get('#city').type('Belém', { delay: 200})
    cy.get('#state').type('PA', { delay: 200})
    cy.get('#zip').type('66000-000', { delay: 200})

    // Preenche pagamento
    cy.get('#cname').type('Philiphe Ferreira', { delay: 200})
    cy.get('#ccnum').type('1234 5678 9012 3456', { delay: 200})
    cy.get('#expmonth').type('Dezembro', { delay: 200})
    cy.get('#expyear').type('2030', { delay: 200})
    cy.get('#cvv').type('123', { delay: 200})

    // Desmarca checkbox e marca novamente (opcional)
    cy.get('input[name="sameadr"]').uncheck().check()

    // Clique no botão de enviar com delay
    // cy.get('.btn').wait(500).click()

    // Aqui poderíamos verificar se a submissão levou a outra página
    // ou se o formulário foi resetado, se houver JS ativo
  })
})