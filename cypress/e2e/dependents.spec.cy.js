import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginPage.js';
import Dependents from '../page/dependents.js'

describe('Dependents', () => {
  const loginPage = new LoginPage();
  const dependents = new Dependents();
    beforeEach(() => {
  loginPage.acessLoginPage();
  loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    })
  it('Deve exibir os dependentes corretamente', () => {
    dependents.dependents()
    dependents.addDependents()
    dependents.salvauDependents()

  })
})