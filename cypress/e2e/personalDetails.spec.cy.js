import userData from '../fixtures/userData.json'
import PersonalDetails from'../page/personalDetails'
import LoginPage from '../page/loginPage'


describe('Personal Details', () => {
  const loginPage = new LoginPage()
  const personalDetails = new PersonalDetails()
    beforeEach(() => {
      loginPage.acessLoginPage()
      loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    })

  it('Pagina My Info', () => {
    personalDetails.menuPersonalDetails()
    personalDetails.employeeFullName()
    personalDetails.employeeId()
    personalDetails.nationality()
    personalDetails.saveIndentification()
    personalDetails.savecustomField()


    })
})
