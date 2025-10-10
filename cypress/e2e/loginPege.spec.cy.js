import userData from '../fixtures/userData.json';
import seletores from '../fixtures/userSelectorLogin.json';

describe('testes de login', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('/auth/login')
    cy.get(seletores.usernameInput).type(userData.validUser.username);
    cy.get(seletores.passwordInput).type(userData.validUser.password);
    cy.get(seletores.loginButton).click();
    cy.url().should('include', seletores.dashboardUrl);
  })
  
  it('Login com credenciais inválidas', () => {
    cy.visit('/auth/login')
    cy.get(seletores.usernameInput).type(userData.invalidUser.username)
    cy.get(seletores.passwordInput).type(userData.invalidUser.password)
    cy.get(seletores.loginButton).click()
    cy.get(seletores.menssagenAlert).should('contain', seletores.menssagenErro, )
  })
})