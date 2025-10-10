import userData from '../fixtures/userData.json'
import seletores from '../fixtures/userSelectorDependents.json'

describe('Dependents', () => {
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