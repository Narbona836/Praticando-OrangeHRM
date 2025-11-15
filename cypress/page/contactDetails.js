class ContactDetails {
    selectors() {
    const seletores = {
        botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
        butonContactDetails: "[data-v-84c8a174='']",
        urlMayInfo: "/pim/viewPersonalDetails/empNumber/7",
        campoStreet1: "[data-v-1f99f73c='']",
        campoStreet2: "[data-v-1f99f73c='']",
        campoCity: "[data-v-1f99f73c='']",
        campoState: "[data-v-1f99f73c='']",
        campoPostalCode: "[data-v-1f99f73c='']",
        campoCountry: "[data-v-67d2aedf='']",
        campoHome: "[data-v-1f99f73c='']",
        campoMobile: "[modelmodifiers='[object Object]']",
        campoWork: "[modelmodifiers='[object Object]']",
        campoWorkEmail: "[data-v-1f99f73c='']",
        campoOtherEmail: "[data-v-1f99f73c='']",
        bottonSaveContactDetails: "[data-v-10d463b7='']",
        menssagenmSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text"
    }
    return seletores;
    }
    mayInfo() {
        cy.get(this.selectors().botonMyInfo).click()
        cy.url().should('include', this.selectors().urlMayInfo)
        cy.get(this.selectors().butonContactDetails).eq(3).click()
        
    }
    anddress() {
        cy.get(this.selectors().campoStreet1).eq(1).clear().type('Rua Exemplo, 123')
        cy.get(this.selectors().campoStreet2).eq(2).clear().type('rua test2')
        cy.get(this.selectors().campoCity).eq(3).clear().type('interior')
        cy.get(this.selectors().campoState).eq(4).clear().type('SP')
        cy.get(this.selectors().campoPostalCode).eq(5).clear().type('12345')
        // cy.get(this.selectors().campoCountry).eq(3).contains('Argentina').click()
        
    }
    telephone() {
        cy.get(this.selectors().campoHome).eq(6).clear().type('123456789')
        cy.get(this.selectors().campoMobile).eq(1).clear().type('987654321')
        cy.get(this.selectors().campoWork).eq(2).clear().type('5555555')
    }
    email() {
        cy.get(this.selectors().campoWorkEmail).eq(9).clear().type('email@exemplo.com')
        cy.get(this.selectors().campoOtherEmail).eq(10).clear().type('outroemail@exemplo.com')

    }
    salvar() {
        cy.get(this.selectors().bottonSaveContactDetails).eq(0).click()
        cy.get(this.selectors().menssagenmSucesso).should('contain', 'Successfully Updated')
    }
}

export default ContactDetails;