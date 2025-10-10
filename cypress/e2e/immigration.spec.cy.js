import seletores from '../fixtures/userSelectorImmigration.json'
import userData from '../fixtures/userData.json'


describe('Immigration', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })

  it('Deve exibir registro de imigração corretamente', () => {
    cy.get(seletores.botonMyInfo).click()
    cy.url().should('include', seletores.urlMyInfo)
    cy.get(seletores.ButtonImmigration).click()
    cy.url().should('include', seletores.urlImmigration)
    cy.get(seletores.buttonAddImmigration).eq(2).click()
    cy.get(seletores.selectDocument).eq(3).click({force: true})
    cy.get(seletores.campoNunber).eq(1).clear().type('123456987')
    cy.get(seletores.campoIssuedDate).eq(0).click().type('2025-18-10')
    cy.get(seletores.campoExpiryDate).eq(1).click({force: true}).type('2026-17-10')
    cy.get(seletores.campoEligibleStatus).eq(4).click({force: true}).type('Legalizado')
    cy.get(seletores.campoIssuedBy).eq(2).click()
    cy.contains('Brazil').click()
    cy.get(seletores.campoEligibleReviewDate).eq(2).click().type('2030-08-05')
    cy.get(seletores.campoComments).click({force: true}).type('testcomentario')
    cy.get(seletores.buttonAddImmigration).eq(1).click()
    
  })
})