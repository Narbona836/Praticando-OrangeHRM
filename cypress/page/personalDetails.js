class PersonalDetais {
    selectors() {
        const seletores = {
            buttonMayInfo: "[href='/web/index.php/pim/viewMyDetails']",
            urlMayInfo: "/pim/viewPersonalDetails/empNumber/7",
            campofirstName: "[name='firstName']",
            campoMiddleName: "[name='middleName']",
            campoLastName: "[name='lastName']",
            campoId: "[data-v-1f99f73c='']",
            campoOTherId: "[data-v-1f99f73c='']",
            campoDriversLicense: "[data-v-1f99f73c='']",
            campoLicenseExpiry: "[placeholder='yyyy-dd-mm']",
            campoNationality: "[data-v-67d2aedf='']",
            campoMaritalStatus: "[data-v-67d2aedf='']",
            campoDateOfBirth: "[placeholder='yyyy-dd-mm']",
            campoGender: "[data-v-7ef819fd='']",
            bottonSaveIdentification: "[data-v-10d463b7='']",
            mensagenmSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text",
            campoBloodType: "[data-v-13cf171c='']",
            campoTestField: "[options='']"
        }
        return seletores
    }
    menuPersonalDetaisl() {
        cy.get(this.selectors().buttonMayInfo).click()
        cy.url().should('include', this.selectors().urlMayInfo)
    }
    employeeFullName() {
        cy.get(this.selectors().campofirstName).clear().type('Willian')
        cy.get(this.selectors().campoMiddleName).clear().type('Augusto')
        cy.get(this.selectors().campoLastName).clear().type('Silva')
    }
    employeeId() {
        cy.get(this.selectors().campoId).eq(4).clear().type('12345')
        cy.get(this.selectors().campoOTherId).eq(5).clear().type('67890')
        cy.get(this.selectors().campoDriversLicense).eq(6).clear().type('A1234567')
        cy.get(this.selectors().campoLicenseExpiry).eq(0).clear().type('2025-12-31')
    }
    nationality() {
        cy.get(this.selectors().campoNationality).eq(0).click({force: true})
        cy.contains('Brazilian').click()
        cy.get(this.selectors().campoMaritalStatus).eq(4).click()
        cy.contains('Single').click()
        cy.get(this.selectors().campoDateOfBirth).eq(1).click().clear().type('1990-01-01')
        cy.get(this.selectors().campoGender).eq(0).click()
    }
    saveIndentification() {
        cy.get(this.selectors().bottonSaveIdentification).eq(0).click()
        cy.get(this.selectors().mensagenmSucesso).should('contain', 'Successfully Updated')
    }
    custonField() {
        cy.get(this.selectors().campoBloodType).eq(4).click()
        cy.contains('O+').click()
        cy.get(this.selectors().campoTestField).clear().type('Teste')
    }
    savecustomField() {
        cy.get(this.selectors().bottonSaveIdentification).eq(1).click()
        cy.get(this.selectors().mensagenmSucesso).should('contain', 'Successfully Updated')
    }
}

export default PersonalDetais