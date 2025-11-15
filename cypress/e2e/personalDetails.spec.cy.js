import userData from '../fixtures/userData.json'
import PersonalDetails from'../page/personalDetails'
import LoginPage from '../page/loginPage'


describe('Personal Details', () => {
  const loginPage = new LoginPage()
  const personalDetais = new PersonalDetails()
    beforeEach(() => {
      loginPage.acessLoginPage()
      loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    })

  it('pagina My Info', () => {
    personalDetais.menuPersonalDetaisl()
    personalDetais.employeeFullName()
    personalDetais.employeeId()
    personalDetais.nationality()
    personalDetais.saveIndentification()
    personalDetais.savecustomField()


    })
})
