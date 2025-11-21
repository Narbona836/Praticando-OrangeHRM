class LoginPage {
    selectors() {
    const seletores = { 
        usernameInput: '[name="username"]',
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
    createUser(createdUser) {
        cy.fixture('lastCreatedUser.json').then((user) => {
        createdUser = user; 
        });
    }
    loginRandomico(createdUser) {
        cy.log(`Tentando login com Username: ${createdUser.username}`);
        cy.get(this.selectors().usernameInput).type(createdUser.username);
        cy.get(this.selectors().passwordInput).type(createdUser.password);
        cy.get(this.selectors().loginButton).click();
        cy.url().should('include', this.selectors().dashboardUrl);
    }
}

export default LoginPage;