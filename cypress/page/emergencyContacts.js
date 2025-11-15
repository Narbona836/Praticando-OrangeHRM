class EmergencyContacts {
    selectors() {
        const seletores = {
    usernameInput: "input[name='username']",
    passwordInput: "input[name='password']",
    loginButton: "button[type='submit']",
    dashboardUrl: "/web/index.php/dashboard/index",
    botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    urlMyInfo: "/pim/viewPersonalDetails/empNumber/7",
    buttonEmergencyContacts: "[href='/web/index.php/pim/viewEmergencyContacts/empNumber/7']",
    buttonAddEmergencyContact: "[data-v-10d463b7='']",
    campoName: "[data-v-1f99f73c='']",
    campoRelationship: "[data-v-1f99f73c='']",
    campoHomeTelephone: "[data-v-1f99f73c='']",
    campoMobile: "[data-v-1f99f73c='']",
    campoWorkTelephone: "[data-v-1f99f73c='']",
    buttonSaveEmergencyContact: "[type='submit']",
    menssagenmSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text"
        }
        return seletores;
    }
    emergencyContacts() {
        cy.get(this.selectors().botonMyInfo).click()
        cy.url().should('include', this.selectors().urlMyInfo)
        cy.get(this.selectors().buttonEmergencyContacts).click()
    }
    addEmergencyContacts() {
        cy.get(this.selectors().buttonAddEmergencyContact).eq(0).click()
        cy.get(this.selectors().campoName).eq(1).type('nomeTeste')
        cy.get(this.selectors().campoRelationship).eq(2).type('Irmão')
        cy.get(this.selectors().campoHomeTelephone).eq(3).type('123456789')
        cy.get(this.selectors().campoMobile).eq(4).type('987654321')
        cy.get(this.selectors().campoWorkTelephone).eq(5).type('555555555')
        cy.get(this.selectors().buttonSaveEmergencyContact).click()
        cy.get(this.selectors().menssagenmSucesso).should('contain', 'Successfully Saved')
    }
}

export default EmergencyContacts