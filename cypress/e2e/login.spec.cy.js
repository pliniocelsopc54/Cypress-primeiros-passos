
//Teste de login com sucesso

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    secionTitleTopBar: "['.oxd-topbar-header-breadcrumb > .oxd-text']",
    WrongCredencialAlert: "['.oxd-alert']"
  }

  it('Login - Success', () => {  //it.skip -> pula a funcao
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorList.passowrdField).type('admin123')
    cy.get(seclectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.secionTitleTopBar).contains('Dashboard')
  })
})

//Cenario de login sem sucesso

describe('Orange HRM Tests', () => {
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.WrongCredencialAlert)   
  })
})