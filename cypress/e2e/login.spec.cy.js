import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    secionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",  //oxd-topbar-header-breadcrumb-module
    dashboardGrid: ".oxd-layout-context", //.oxd-layout-context // orangehrm-dashboard-grid
    WrongCredencialAlert: ".oxd-alert"
  }

  //Teste de login com sucesso

  it('Login - Success', () => {  //it.skip -> pula a funcao
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })


//Cenario de login sem sucesso

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCredencialAlert)   
  })
})