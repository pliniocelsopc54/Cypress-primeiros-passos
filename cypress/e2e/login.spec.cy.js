describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    secionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",  //oxd-topbar-header-breadcrumb-module
    dashboardGrid: ".oxd-layout-context", //.oxd-layout-context // orangehrm-dashboard-grid
    WrongCredencialAlert: ".oxd-alert"
  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'test',
      password: 'test'
    }
  }

  //Teste de login com sucesso

  it('Login - Success', () => {  //it.skip -> pula a funcao
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
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