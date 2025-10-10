import userData from '../fixtures/userData.json'
import seletores from '../fixtures/userSelectorEmergencyContacts.json'

describe('Emergency contacts', () => {


    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })


  it('Deve exibir os contatos de emergência corretamente', () => {
    //(Emergency Contacts)
    cy.get(seletores.botonMyInfo).click()
    cy.url().should('include', seletores.urlMyInfo)
    cy.get(seletores.buttonEmergencyContacts).click()
    cy.get(seletores.buttonAddEmergencyContact).eq(0).click()
    //Formulario Emergency Contacts
    cy.get(seletores.campoName).eq(1).type('nomeTeste')
    cy.get(seletores.campoRelationship).eq(2).type('Irmão')
    cy.get(seletores.campoHomeTelephone).eq(3).type('123456789')
    cy.get(seletores.campoMobile).eq(4).type('987654321')
    cy.get(seletores.campoWorkTelephone).eq(5).type('555555555')
    cy.get(seletores.buttonSaveEmergencyContact).click()
    cy.get(seletores.menssagenmSucesso).should('contain', 'Successfully Saved')
  })
})