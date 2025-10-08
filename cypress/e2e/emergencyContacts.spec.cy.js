import userData from '../fixtures/userData.json'


describe('Emergency contacts', () => {

const seletores = {
    //seletores de login
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    dashboardUrl: '/web/index.php/dashboard/index',
    //seletores do My Info(Emergency Contacts)
    botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    urlMyInfo: "/pim/viewPersonalDetails/empNumber/7",
    buttonEmergencyContacts: "[href='/web/index.php/pim/viewEmergencyContacts/empNumber/7']",
    buttonAddEmergencyContact: "[data-v-10d463b7='']",
    //seletores do formulario de Emergency Contacts
    campoName: "[data-v-1f99f73c='']",
    campoRelationship: "[data-v-1f99f73c='']",
    campoHomeTelephone: "[data-v-1f99f73c='']",
    campoMobile: "[data-v-1f99f73c='']",
    campoWorkTelephone: "[data-v-1f99f73c='']",
    buttonSaveEmergencyContact: "[type='submit']",
    menssagenmSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text"
}

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