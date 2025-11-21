import userData from '../fixtures/userData.json';
import EmployList from '../page/employList'
import LoginPage from '../page/loginPage';



describe('Employee List', () => {
    const loginPage = new LoginPage()
    const employList = new EmployList()
    beforeEach(function () {
        cy.readFile('cypress/fixtures/lastCreatedUser.json').then((user) => {
            this.lastUser = user;
        });
        loginPage.acessLoginPage()
        loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    });

    it('Deve encontrar o usuario criado na lista pelo Id', function () {

        employList.menuPim();
        employList.employListId(this.lastUser.employeeId);
    });

    it('Deve encontrar o usuario criado na lista pelo Nome', function () {
        employList.menuPim();
        employList.employListName(this.lastUser.username);
    });

});
