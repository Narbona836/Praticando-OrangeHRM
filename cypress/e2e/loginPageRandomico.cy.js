import LoginPage from '../page/loginPage';

describe('testes de login com usuario randomico criado em addEmployee.spec.cy.js', () => {
  const loginPage = new LoginPage();
  let createdUser;

  beforeEach(() => {
    cy.readFile('cypress/fixtures/lastCreatedUser.json').then((user) => {
      createdUser = user;
    });
  });

  it('Login com usuario randomico criado em addEmployee.spec.cy.js', () => {
    loginPage.acessLoginPage();

    cy.wrap(createdUser).then(() => {
      loginPage.loginRandomico(createdUser);
    });
  });
});
