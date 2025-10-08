import { url } from 'inspector'
import userData from '../fixtures/userData.json'


describe('Immigration', () => {

const seletores = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    dashboardUrl: '/web/index.php/dashboard/index',
    //seletores do My Info(Immigration)
    botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    urlMyInfo: "/pim/viewPersonalDetails/empNumber/7",
    ButtonImmigration: "[href='/web/index.php/pim/viewImmigration/empNumber/7']",
    urlImmigration: "/pim/viewImmigration/empNumber/7",
    buttonAddImmigration: "[data-v-3dab643a='']",
    selectDocument: "[data-v-7ef819fd='']",
    campoNunber: "[data-v-1f99f73c='']",
    campoIssuedDate: "[placeholder='yyyy-dd-mm']",
    campoExpiryDate: "[placeholder='yyyy-dd-mm']",
    campoEligibleStatus: "[data-v-1f99f73c='']",
    campoIssuedBy: "[data-v-67d2aedf='']",
    campoEligibleReviewDate: "[placeholder='yyyy-dd-mm']",
    campoComments: "[placeholder='Type Comments here']",
    buttonSaveImmigration: "[data-v-10d463b7='']",
    
}

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