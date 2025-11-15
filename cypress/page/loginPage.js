class LoginPage {
    selectors() {
    const seletores = {
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name="password"]',
        loginButton: 'button[type="submit"]',
        dashboardUrl: "/web/index.php/dashboard/index",
        menssagenAlert: ".oxd-alert-content-text",
        menssagenErro: "Invalid credentials"
    
        }
        return seletores;
    }
    acessLoginPage() {
        cy.visit('/auth/login')
    }
    loginUser(username, password) {
        cy.get(this.selectors().usernameInput).type(username)
        cy.get(this.selectors().passwordInput).type(password)
        cy.get(this.selectors().loginButton).click()
        cy.url().should('include', this.selectors().dashboardUrl)
    }
    loginUserInvalid(username, password) {
        cy.get(this.selectors().usernameInput).type(username)
        cy.get(this.selectors().passwordInput).type(password)
        cy.get(this.selectors().loginButton).click()
        cy.get(this.selectors().menssagenAlert).should('contain', this.selectors().menssagenErro)
    }
}

export default LoginPage;