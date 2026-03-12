
//Teste de login com sucesso

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    secionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",  //oxd-topbar-header-breadcrumb-module
    WrongCredencialAlert: ".oxd-alert"
  }

  it('Login - Success', () => {  //it.skip -> pula a funcao
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.secionTitleTopBar).contains('Dashboard')
  })

//Cenario de login sem sucesso


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCredencialAlert)   
  })
})