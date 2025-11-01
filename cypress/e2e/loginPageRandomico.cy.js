import seletores from '../fixtures/userSelectorLogin.json';

describe('testes de login', () => {
    let createdUser;

    before(() => {
        cy.fixture('lastCreatedUser.json').then((user) => {
            createdUser = user; 
        });
    });
    it('Login com com usuario ramdomico', () => {
    cy.visit('/auth/login')
    cy.log(`Tentando login com Username: ${createdUser.username}`);
    cy.get(seletores.usernameInput).type(createdUser.username);
    cy.get(seletores.passwordInput).type(createdUser.password);
    cy.get(seletores.loginButton).click();
    cy.url().should('include', seletores.dashboardUrl);
  })
})