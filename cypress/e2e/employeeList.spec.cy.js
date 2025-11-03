import userData from '../fixtures/userData.json';
import seletores from '../fixtures/userSelector.employeeList.json'


describe('Employee List', () => {
    beforeEach(function () {
        cy.readFile('cypress/fixtures/lastCreatedUser.json').then((user) => {
            this.lastUser = user;
        });
        cy.visit('/auth/login');
        cy.get(seletores.usernameInput).type(userData.validUser.username);
        cy.get(seletores.passwordInput).type(userData.validUser.password);
        cy.get(seletores.loginButton).click();
        cy.url().should('include', seletores.dashboardUrl);
    });

    it('Deve encontrar o usuario criado na lista pelo Id',function () {
        cy.get(seletores.buttonPIM).eq(4).click();
        cy.get(seletores.buttonEmployeeList).eq(3).click();
        cy.url().should('include', seletores.employeeListUrl);
        cy.get(seletores.campoEmployeeId).eq(1).type(this.lastUser.employeeId);
        cy.get(seletores.buttonSearch).eq(1).click();
        cy.get(seletores.checkUser,this.employeeId).eq(1).should('be.visible');
    });
});
