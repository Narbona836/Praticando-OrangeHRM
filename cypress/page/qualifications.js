class Qualifications {
    selectors() {
        const seletores = {
    usernameInput: "input[name='username']",
    passwordInput: "input[name='password']",
    loginButton: "button[type='submit']",
    dashboardUrl: "/web/index.php/dashboard/index",
    botonMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    buttonQualifications: "[href='/web/index.php/pim/viewQualifications/empNumber/7']",
    urlQualifications: "/pim/viewQualifications/empNumber/7",
    campoCompany: "[data-v-1f99f73c='']",
    buttonAddExperience: "[data-v-3dab643a='']",
    campoJobTitle: "[data-v-1f99f73c='']",
    campoDataFron: "[placeholder='yyyy-dd-mm']",
    campoDataTo: "[placeholder='yyyy-dd-mm']",
    campoComment: "[data-v-bd337f32='']",
    buttonSaveQualificatons: "[data-v-10d463b7='']",
    menssagemSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text",
    buttonAddWorkExperience: "[data-v-3dab643a='']",
    buttonExcluirWorkExperience: "[data-v-f5c763eb='']",
    buttonDeleteWorkExperience: "[data-v-8f9701a2='']",
    menssagemDeleteSucesso: ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text",
    buttonAddEducation: "[data-v-3dab643a='']",
    campoLevel: "[data-v-67d2aedf='']",
    campoInstitute: "[data-v-1f99f73c='']",
    campoSpecialization: "[data-v-1f99f73c='']",
    campoYear: "[data-v-1f99f73c='']",
    campoScore: "[data-v-1f99f73c='']",
    campoStartDate: "[placeholder='yyyy-dd-mm']",
    campoEndDate: "[placeholder='yyyy-dd-mm']",
    buttonSaveEducation: "[data-v-10d463b7='']"  
        }
        return seletores;
    }
    menuQualifications() {
        cy.get(this.selectors().botonMyInfo).click()
        cy.get(this.selectors().buttonQualifications).click()
        cy.url().should('include', this.selectors().urlQualifications)
    }
    addexperience() {
        cy.get(this.selectors().buttonAddExperience).eq(2).click()
        cy.get(this.selectors().campoCompany).eq(1).type('Company test')
        cy.get(this.selectors().campoJobTitle).eq(2).type('testJob')
        cy.get(this.selectors().campoDataFron).eq(0).clear().type('2025-05-10')
        cy.get(this.selectors().campoDataTo).eq(1).click({ Force: true }).clear().type('2030-05-02')
        cy.get(this.selectors().campoComment).click({ force: true }).type('testComentTest')
    }
    saveQualifications() {
        cy.get(this.selectors().buttonSaveQualificatons).eq(1).click()
        cy.get(this.selectors().menssagemSucesso).should('contain', 'Successfully Saved')
    }
    excluirExperience() {
        cy.get(this.selectors().buttonExcluirWorkExperience).eq(4).click()
        cy.get(this.selectors().buttonDeleteWorkExperience).eq(7).click()
        cy.get(this.selectors().menssagemDeleteSucesso).should('contain', 'Successfully Deleted')
    }
    addEducation() {
        cy.get(this.selectors().buttonAddEducation).eq(5).click()
        cy.get(this.selectors().campoLevel).eq(2).click()
        cy.contains('College Undergraduate').click()
        cy.get(this.selectors().campoInstitute).eq(1).type('@intitutoTets')
        cy.get(this.selectors().campoSpecialization).eq(2).type('tetSuperior')
        cy.get(this.selectors().campoYear).eq(3).type('2022')
        cy.get(this.selectors().campoScore).eq(4).type('100')
        cy.get(this.selectors().campoStartDate).eq(0).clear().type('2020-01-08')
        cy.get(this.selectors().campoEndDate).eq(1).click({ force: true }).clear().type('2026-10-08')
    }
    saveEducation() {
        cy.get(this.selectors().buttonSaveEducation).eq(3).click({ force: true })
    }
}

export default Qualifications 