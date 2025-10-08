import userData from '../fixtures/userData.json'


describe('testes de login', () => {

const seletores = {
  usernameInput: 'input[name="username"]',
  passwordInput: 'input[name="password"]',
  loginButton: 'button[type="submit"]',
  dashboardUrl: '/web/index.php/dashboard/index'
}

  it('Login com credenciais válidas', () => {
    cy.visit('/auth/login')
    cy.get(seletores.usernameInput).type(userData.validUser.username)
    cy.get(seletores.passwordInput).type(userData.validUser.password)
    cy.get(seletores.loginButton).click()
    cy.url().should('include', seletores.dashboardUrl)
  })
  
  it('Login com credenciais inválidas', () => {
    cy.visit('/auth/login')
    cy.get(seletores.usernameInput).type(userData.invalidUser.username)
    cy.get(seletores.passwordInput).type(userData.invalidUser.password)
    cy.get(seletores.loginButton).click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })
})