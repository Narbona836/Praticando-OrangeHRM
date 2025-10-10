import userData from '../fixtures/userData.json'
import seletores from '../fixtures/userSelector.ContactDetails.json'

describe('Contact Details', () => {
beforeEach(() => {
            cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
})

  it('Deve exibir os detalhes de contato corretamente', () => {
    //(Contact Details)
    cy.get(seletores.botonMyInfo).click()
    cy.url().should('include', '/pim/viewPersonalDetails/empNumber/7')
    cy.get(seletores.butonContactDetails).eq(3).click()
    //Address
    cy.get(seletores.campoStreet1).eq(1).clear().type('Rua Exemplo, 123')
    cy.get(seletores.campoStreet2).eq(2).clear().type('rua test2')
    cy.get(seletores.campoCity).eq(3).clear().type('interior')
    cy.get(seletores.campoState).eq(4).clear().type('SP')
    cy.get(seletores.campoPostalCode).eq(5).clear().type('12345')
    cy.get(seletores.campoCountry).eq(3).click()
    cy.contains('Brazil').click()
    //Telephone
    cy.get(seletores.campoHome).eq(0).clear().type('123456789')
    cy.get(seletores.campoMobile).eq(1).clear().type('987654321')
    cy.get(seletores.campoWork).eq(2).clear().type('555555555')
    //Email
    cy.get(seletores.campoWorkEmail).eq(9).clear().type('email@exemplo.com')
    cy.get(seletores.campoOtherEmail).eq(10).clear().type('outroemail@exemplo.com')
    cy.get(seletores.bottonSaveContactDetails).eq(0).click()
    cy.get(seletores.menssagenmSucesso).should('contain', 'Successfully Updated')

  })
  
})