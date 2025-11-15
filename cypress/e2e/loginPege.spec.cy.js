import userData from '../fixtures/userData.json';
import LoginPage from '../page/loginPage.js';



describe('testes de login', () => {
  const loginPage = new LoginPage();

  it('Login com credenciais válidas', () => {
    loginPage.acessLoginPage();
    loginPage.loginUser(userData.validUser.username, userData.validUser.password);
  })
  
  it('Login com credenciais inválidas', () => {
    loginPage.acessLoginPage();
    loginPage.loginUserInvalid(userData.invalidUser.username, userData.invalidUser.password);
  })
})