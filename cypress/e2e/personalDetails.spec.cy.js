import userData from '../fixtures/userData.json'
import seletores from '../fixtures/userSelectorDashboard.json'


describe('Personal Details', () => {
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
