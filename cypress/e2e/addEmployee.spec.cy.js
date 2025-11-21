import AddEmployee from '../page/addEmployee';
import userData from '../fixtures/userData.json';
import LoginPage from '../page/loginPage'

const Chance = require('chance');
const chance = new Chance();

describe('Add Employee', () => {
    const addEmployee = new AddEmployee()
    const loginPage = new LoginPage()
    beforeEach(function ()  {
        const userLoginRandom = {
            username: chance.word({ length: 8 }) + chance.integer({ min: 100, max: 999 }),
            password: 'Test@' + chance.integer({ min: 1000, max: 9999 }),
            employeeId: chance.integer({ min: 1000, max: 9999 }).toString() 
        };
        cy.wrap(userLoginRandom).as('randomUser');

        loginPage.acessLoginPage()
        loginPage.loginUser(userData.validUser.username, userData.validUser.password)

    })
    it('Deve adicionar um novo usuario', function () {
        const randomUser = this.randomUser;
        addEmployee.iniciarAddEmployee()
        addEmployee.dadosEmployee(randomUser.username, randomUser.employeeId)
        addEmployee.createLoginDatails(randomUser.username, randomUser.password)
        addEmployee.saveAddEmployee()

        cy.writeFile('cypress/fixtures/lastCreatedUser.json', randomUser);
    })
})