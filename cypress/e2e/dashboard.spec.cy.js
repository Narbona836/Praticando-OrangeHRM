import userData from '../fixtures/userData.json'


describe('Personal Details', () => {

const seletores = {
    //seletores de login
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    dashboardUrl: '/web/index.php/dashboard/index',
    //seletores do My Info
    botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    urlMyInfo: '/pim/viewPersonalDetails/empNumber/7',
    campofirstName: "[name='firstName']",
    campoMiddleName: "[name='middleName']",
    campoLastName: "[name='lastName']",
    //seletores de identificação
    campoId: "[data-v-1f99f73c='']",
    campoOTherId: "[data-v-1f99f73c='']",
    campoDriversLicense: "[data-v-1f99f73c='']",
    campoLicenseExpiry: "[placeholder='yyyy-dd-mm']",
    campoNationality: "[clear='false']",
    campoMaritalStatus: "[clear='false']",
    campoDateOfBirth: "[placeholder='yyyy-dd-mm']",
    campoGender:".--label-right",
    bottonSaveIdentification: "[type='submit']",
    mensagenmSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text",
    //seletore Custom Fields
    campoBloodType: "[tabindex='0']",
    campoTestField: "[options='']"

}

    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })

  it('pagina My Info', () => {
    cy.get(seletores.botonMyInfo).click()
    cy.url().should('include', seletores.urlMyInfo)
    cy.get(seletores.campofirstName).clear().type('Willian')
    cy.get(seletores.campoMiddleName).clear().type('Augusto')
    cy.get(seletores.campoLastName).clear().type('Silva')
    cy.get(seletores.campoId).eq(4).clear().type('12345')
    cy.get(seletores.campoOTherId).eq(5).clear().type('67890')
    cy.get(seletores.campoDriversLicense).eq(6).clear().type('A1234567')
    cy.get(seletores.campoLicenseExpiry).eq(0).clear().type('2025-12-31')
    cy.get(seletores.campoNationality).eq(0).click({force: true})
    cy.contains('Brazilian').click()
    cy.get(seletores.campoMaritalStatus).eq(1).click()
    cy.contains('Single').click()
    cy.get(seletores.campoDateOfBirth).eq(1).click().clear().type('1990-01-01')
    cy.get(seletores.campoGender).eq(0).click()
    cy.get(seletores.bottonSaveIdentification).eq(0).click()
    cy.get(seletores.mensagenmSucesso).should('contain', 'Successfully Updated')
    cy.get(seletores.campoBloodType).eq(2).click()
    cy.contains('O+').click()
    cy.get(seletores.campoTestField).clear().type('Teste')
    cy.get(seletores.bottonSaveIdentification).eq(1).click()
    cy.get(seletores.mensagenmSucesso).should('contain', 'Successfully Updated')


    })
})
