import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginPage'
import Imigration from '../page/imigration'


describe('Immigration', () => {
  const loginPage = new LoginPage()
  const imigration = new Imigration()
    beforeEach(() => {
      loginPage.acessLoginPage()
      loginPage.loginUser(userData.validUser.username, userData.validUser.password)
    })

  it('Deve exibir registro de imigração corretamente', () => {
    imigration.menuImigration()
    imigration.addImigration()
  })
})