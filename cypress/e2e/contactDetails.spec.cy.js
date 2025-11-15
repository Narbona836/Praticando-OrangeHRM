import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginPage'

import ContactDetails from '../page/contactDetails'

describe('Contact Details', () => {
  const loginPage = new LoginPage();
  const contactDetails = new ContactDetails();
beforeEach(() => {
  loginPage.acessLoginPage();
  loginPage.loginUser(userData.validUser.username, userData.validUser.password)

})

  it('Deve exibir os detalhes de contato corretamente', () => {
    contactDetails.mayInfo()
    contactDetails.anddress()
    contactDetails.telephone()
    contactDetails.email()
    contactDetails.salvar()

  })
  
})