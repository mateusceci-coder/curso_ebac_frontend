/// <reference types="cypress" />

describe('Testando agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Inclusão de um contato', () => {
        cy.get('input[type="text"]').type("Mateus Souza")
        cy.get('input[type="email"]').type("mateus@email.com")
        cy.get('input[type="tel"]').type("48 12345678")
        cy.get('.adicionar').click()
     })

     it('Alterar informação de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').type(' Silva')
        cy.get('.alterar').click()
     })

     it('Remover um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
     })
})