import userData from '../fixtures/userData.json';
import seletores from '../fixtures/userSelectorQualifications.json';

describe('Qualifications', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get(seletores.usernameInput, { timeout: 10000 }).type(userData.validUser.username)
        cy.get(seletores.passwordInput).type(userData.validUser.password)
        cy.get(seletores.loginButton).click()
        cy.url().should('include', seletores.dashboardUrl)
    })

    it('Adicionar experiencia proficional com Sucesso', () => {
        cy.get(seletores.botonMyInfo).click()
        cy.get(seletores.buttonQualifications).click()
        cy.url().should('include', seletores.urlQualifications)
        //seletores My Info (Qualifications)
        cy.get(seletores.buttonAddExperience).eq(2).click()
        cy.get(seletores.campoCompany).eq(1).type('Company test')
        cy.get(seletores.campoJobTitle).eq(2).type('testJob')
        cy.get(seletores.campoDataFron).eq(0).clear().type('2025-05-10')
        cy.get(seletores.campoDataTo).eq(1).click({ Force: true }).clear().type('2030-05-02')
        cy.get(seletores.campoComment).click({ force: true }).type('testComentTest')
        cy.get(seletores.buttonSaveQualificatons).eq(1).click()
        cy.get(seletores.menssagemSucesso).should('contain', 'Successfully Saved')
        //seletores Qualifications (Work Experience)
        //cy.get(seletores.buttonAddWorkExperience).eq(2).click()
    })
    it('Deve apagar experiencia de trabalho com sucesso', () => {
        cy.get(seletores.botonMyInfo).click()
        cy.get(seletores.buttonQualifications).click()
        cy.url().should('include', seletores.urlQualifications)
        cy.get(seletores.buttonExcluirWorkExperience).eq(4).click()
        cy.get(seletores.buttonDeleteWorkExperience).eq(7).click()
        cy.get(seletores.menssagemDeleteSucesso).should('contain', 'Successfully Deleted')
    })
    it('Deve adicionar educação com sucesso', () => { 
        cy.get(seletores.botonMyInfo).click()
        cy.get(seletores.buttonQualifications).click()
        cy.url().should('include', seletores.urlQualifications)
        cy.get(seletores.buttonAddEducation).eq(5).click()
        cy.get(seletores.campoLevel).eq(2).click()
        cy.contains('College Undergraduate').click()
        cy.get(seletores.campoInstitute).eq(1).type('@intitutoTets')
        cy.get(seletores.campoSpecialization).eq(2).type('tetSuperior')
        cy.get(seletores.campoYear).eq(3).type('2022')
        cy.get(seletores.campoScore).eq(4).type('100')
        cy.get(seletores.campoStartDate).eq(0).clear().type('2020-01-08')
        cy.get(seletores.campoEndDate).eq(1).click({ force: true }).clear().type('2026-10-08')
        cy.get(seletores.buttonSaveEducation).eq(3).click({ force: true })
        


    })
        

})
