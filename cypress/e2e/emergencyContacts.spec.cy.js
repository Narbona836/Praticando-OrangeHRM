import userData from '../fixtures/userData.json'
import EmergencyContacts from '../page/emergencyContacts' 
import LoginPage from '../page/loginPage'

describe('Emergency contacts', () => {
  const loginPage = new LoginPage()
  const emergencyContacts = new EmergencyContacts()

    beforeEach(() => {
      loginPage.acessLoginPage()
      loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    })


  it('Deve exibir os contatos de emergência corretamente', () => {
    emergencyContacts.emergencyContacts()
    emergencyContacts.addEmergencyContacts()
  })
})