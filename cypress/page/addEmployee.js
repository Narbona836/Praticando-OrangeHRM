class AddEmployee {
    selectors() {
        const seletores = {
        buttonPIM: "[data-v-6475d26d='']",
        buttonAddEmployee: "[data-v-5327b38a='']",
        campoFirstName: "[name='firstName']",
        campoMiddleName: "[name='middleName']",
        campoLastName: "[name='lastName']",
        campoEmployeeId: "[data-v-1f99f73c='']",
        buttonCreateLoginDetails: "[data-v-8e4757dc='']",
        campoUsername: "[data-v-1f99f73c='']",
        campoStatusEnabled: "[data-v-7ef819fd='']",
        campoPassword: "[data-v-1f99f73c='']",
        campoComfrmPassoword: "[data-v-1f99f73c='']",
        buttonSaveAddEmployee: "[data-v-10d463b7='']",
        menssagenmSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text"

        }
        return seletores;
    }
    iniciarAddEmployee() {
        cy.get(this.selectors().buttonPIM).eq(4).click()
        cy.get(this.selectors().buttonAddEmployee).eq(4).click()
    }
    dadosEmployee(firstName, employeeId) {
        cy.get(this.selectors().campoFirstName).type(firstName)
        cy.get(this.selectors().campoMiddleName).type('Test')
        cy.get(this.selectors().campoLastName).type('User')
        cy.get(this.selectors().campoEmployeeId).eq(4).clear().type(employeeId)
    }
    createLoginDatails(username, password) {
        
        cy.get(this.selectors().buttonCreateLoginDetails).eq(0).click()
        cy.get(this.selectors().campoUsername).eq(5).type(username)
        cy.get(this.selectors().campoStatusEnabled).eq(0).click()
        cy.get(this.selectors().campoPassword).eq(6).type(password)
        cy.get(this.selectors().campoComfrmPassoword).eq(7).type(password)
    }
    saveAddEmployee() {
        cy.get(this.selectors().buttonSaveAddEmployee).eq(1).click()
        cy.get(this.selectors().menssagenmSucesso).should('contain', 'Successfully Saved')
        cy.url().should('include', '/web/index.php/pim/viewPersonalDetails');
    }
}

export default AddEmployee