import seletores from '../fixtures/userSelector.addEmployee.json';
import userData from '../fixtures/userData.json';


const Chance = require('chance');
const chance = new Chance();


describe('Add Employee', () => {
    beforeEach(function ()  {
        const userLoginRandom = {
            username: chance.word({ length: 8 }) + chance.integer({ min: 100, max: 999 }),
            password: 'Test@' + chance.integer({ min: 1000, max: 9999 }),
            employeeId: chance.integer({ min: 1000, max: 9999 }).toString() 
        };
        cy.wrap(userLoginRandom).as('randomUser');

        cy.visit('/auth/login')
        cy.get(seletores.usernameInput).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })
    it('Deve adicionar um novo usuario', function () {
        const randomUser = this.randomUser;
        cy.get(seletores.buttonPIM).eq(4).click()
        cy.get(seletores.buttonAddEmployee).eq(4).click()
        //adicionar formulario 
        cy.get(seletores.campoFirstName).type(randomUser.username)
        cy.get(seletores.campoMiddleName).type('Test')
        cy.get(seletores.campoLastName).type('User')
        cy.get(seletores.campoEmployeeId).eq(4).clear().type(randomUser.employeeId)
        cy.get(seletores.buttonCreateLoginDetails).eq(0).click()
        cy.get(seletores.campoUsername).eq(5).type(randomUser.username)
        cy.get(seletores.campoStatusEnabled).eq(0).click()
        cy.get(seletores.campoPassword).eq(6).type(randomUser.password)
        cy.get(seletores.campoComfrmPassoword).eq(7).type(randomUser.password)
        cy.get(seletores.buttonSaveAddEmployee).eq(1).click()
        cy.get(seletores.menssagenmSucesso).should('contain', 'Successfully Saved')
        cy.url().should('include', '/web/index.php/pim/viewPersonalDetails');
        cy.writeFile('cypress/fixtures/lastCreatedUser.json', randomUser);
    })
})