import userData from '../fixtures/userData.json'


describe('Dependents', () => {

const seletores = {
    //seletores de login
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    dashboardUrl: '/web/index.php/dashboard/index',
    //seletores do My Info(Dependents)
    botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    urlMyInfo: "/pim/viewPersonalDetails/empNumber/7",
    buttonDependents: "[data-v-84c8a174='']",
    //seletores do formulario de Dependents
    buttonAssignedDependents: "[data-v-10d463b7='']",
    campoName: "[data-v-1f99f73c='']",
    campoRelationship:"[data-v-67d2aedf='']",
    campoDateofBirth: "[placeholder='yyyy-dd-mm']",
    buttonSaveDependents: "[type='submit']",
    menssagenmSucesso: ".oxd-text.oxd-text--toast-message"
}

    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })


  it('Deve exibir os dependentes corretamente', () => {
    //(Dependents)
    cy.get(seletores.botonMyInfo).click()
    cy.url().should('include', seletores.urlMyInfo) 
    cy.get(seletores.buttonDependents).eq(7).click()
    //Formulario Dependents
    cy.get(seletores.buttonAssignedDependents).eq(0).click()
    cy.get(seletores.campoName).eq(1).type('Dependente Teste')
    cy.get(seletores.campoRelationship).eq(2).click()
    cy.contains('Child').click()
    cy.get(seletores.campoDateofBirth).type('2010-05-15')
    cy.get(seletores.buttonSaveDependents).click()
    cy.get(seletores.menssagenmSucesso).should('contain', 'Successfully Saved')

  })
})