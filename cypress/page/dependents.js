class Dependents {
    selectors() {
        const seletores = {
        usernameInput: "input[name='username']",
        passwordInput: "input[name='password']",
        loginButton: "button[type='submit']",
        dashboardUrl: "/web/index.php/dashboard/index",
        botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
        urlMyInfo: "/pim/viewPersonalDetails/empNumber/7",
        buttonDependents: "[data-v-84c8a174='']",
        buttonAssignedDependents: "[data-v-10d463b7='']",
        campoName: "[data-v-1f99f73c='']",
        campoRelationship:"[data-v-67d2aedf='']",
        campoDateofBirth: "[placeholder='yyyy-dd-mm']",
        buttonSaveDependents: "[type='submit']",
        menssagenmSucesso: ".oxd-text.oxd-text--toast-message"
        }
        return seletores;
    } 
    dependents() {
        cy.get(this.selectors().botonMyInfo).click()
        cy.url().should('include', this.selectors().urlMyInfo) 
        cy.get(this.selectors().buttonDependents).eq(7).click()
    }
    addDependents() {
        cy.get(this.selectors().buttonAssignedDependents).eq(0).click()
        cy.get(this.selectors().campoName).eq(1).type('Dependente Teste')
        cy.get(this.selectors().campoRelationship).eq(2).click()
        cy.contains('Child').click()
        cy.get(this.selectors().campoDateofBirth).type('2010-05-15')

    }
    salvauDependents() {
        cy.get(this.selectors().buttonSaveDependents).click()
        cy.get(this.selectors().menssagenmSucesso).should('contain', 'Successfully Saved')
    }
}

export default Dependents;