import userData from '../fixtures/userData.json';
import LoginPage from '../page/loginPage';
import Qualifications from '../page/qualifications';

describe('Qualifications', () => {
    const loginPage = new LoginPage()
    const qualifications = new Qualifications()

    beforeEach(() => {
        loginPage.acessLoginPage()
        loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    })

    it('Adicionar experiencia proficional com Sucesso', () => {
        qualifications.menuQualifications()
        qualifications.addexperience() 
        qualifications.saveQualifications
    })
    it('Deve apagar experiencia de trabalho com sucesso', () => {
        qualifications.menuQualifications()
        qualifications.excluirExperience()
    })
    it('Deve adicionar educação com sucesso', () => { 
        qualifications.menuQualifications()
        qualifications.addEducation()
        qualifications.saveEducation()
    })
        

})
