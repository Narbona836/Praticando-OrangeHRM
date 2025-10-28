import seletores from '../fixtures/userSelector.addEmployee.json';
import userData from '../fixtures/userData.json';

const Chance = require('chance');
const chance = new Chance();


describe('Add Employee', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })
    it('Deve adicionar um novo usuario', () => {
        cy.get(seletores.buttonPIM).eq(4).click()
        cy.get(seletores.buttonAddEmployee).eq(4).click()
        //adicionar formulario 
        cy.get(seletores.campoFirstName).type('Willina')
        cy.get(seletores.campoMiddleName).type('Test')
        cy.get(seletores.campoLastName).type('User')
        cy.get(seletores.campoEmployeeId).eq(4).clear().type(chance.integer({ min: -11, max: 11}))
        cy.get(seletores.buttonCreateLoginDetails).eq(0).click()
        cy.get(seletores.campoUsername).eq(5).type(chance.name())
        cy.get(seletores.campoStatusEnabled).eq(0).click()
        cy.get(seletores.campoPassword).eq(6).type('test123456')
        cy.get(seletores.campoComfrmPassoword).eq(7).type('test123456')
        cy.get(seletores.buttonSaveAddEmployee).eq(1).click()
        cy.get(seletores.menssagenmSucesso).should('contain', 'Successfully Saved')
        cy.url().should('include', '/web/index.php/pim/viewPersonalDetails');
  })
})
