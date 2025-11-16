import LoginPage from '../page/loginPage';

describe('testes de login', () => {
    const loginPage = new LoginPage()
    let createdUser;

    before(() => {
        loginPage.createUser()

        
    });
    it('Login com com usuario ramdomico', () => {
        loginPage.acessLoginPage()
        loginPage.loginRandomico()
  })
}) // NÃO CONSEGUE LER A VARIAVEL "LET" NO BEFORE