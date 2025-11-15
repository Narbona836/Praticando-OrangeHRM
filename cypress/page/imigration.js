class Imigration {
    selectors() {
        const seletores= {
        usernameInput: "input[name='username']",
        passwordInput: "input[name='password']",
        loginButton: "button[type='submit']",
        dashboardUrl: "/web/index.php/dashboard/index",
        botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
        urlMyInfo: "/pim/viewPersonalDetails/empNumber/7",
        ButtonImmigration: "[href='/web/index.php/pim/viewImmigration/empNumber/7']",
        urlImmigration: "/pim/viewImmigration/empNumber/7",
        buttonAddImmigration: "[data-v-3dab643a='']",
        selectDocument: "[data-v-7ef819fd='']",
        campoNunber: "[data-v-1f99f73c='']",
        campoIssuedDate: "[placeholder='yyyy-dd-mm']",
        campoExpiryDate: "[placeholder='yyyy-dd-mm']",
        campoEligibleStatus: "[data-v-1f99f73c='']",
        campoIssuedBy: "[data-v-67d2aedf='']",
        campoEligibleReviewDate: "[placeholder='yyyy-dd-mm']",
        campoComments: "[placeholder='Type Comments here']",
        buttonSaveImmigration: "[data-v-10d463b7='']"
        }
        return seletores;
    }
    menuImigration() {
        cy.get(this.selectors().botonMyInfo).click()
        cy.url().should('include', this.selectors().urlMyInfo)
        cy.get(this.selectors().ButtonImmigration).click()
        cy.url().should('include', this.selectors().urlImmigration)
    }
    addImigration() {
        cy.get(this.selectors().buttonAddImmigration).eq(2).click()
        cy.get(this.selectors().selectDocument).eq(3).click({force: true})
        cy.get(this.selectors().campoNunber).eq(1).clear().type('123456987')
        cy.get(this.selectors().campoIssuedDate).eq(0).click().type('2025-18-10')
        cy.get(this.selectors().campoExpiryDate).eq(1).click({force: true}).type('2026-17-10')
        cy.get(this.selectors().campoEligibleStatus).eq(4).click({force: true}).type('Legalizado')
        cy.get(this.selectors().campoIssuedBy).eq(2).click()
        cy.contains('Brazil').click()
        cy.get(this.selectors().campoEligibleReviewDate).eq(2).click().type('2030-08-05')
        cy.get(this.selectors().campoComments).click({force: true}).type('testcomentario')
        cy.get(this.selectors().buttonSaveImmigration).eq(1).click()
    }
}

export default Imigration