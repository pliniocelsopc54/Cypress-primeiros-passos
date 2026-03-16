import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    secionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",  
    dashboardGrid: ".oxd-layout-context", //verifica o campo DASHBOARD
    WrongCredencialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    nickNameField: 'nomedoinput',
    employIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    buttonDateField: ".--close",
    buttonGuardar: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
  }

  //Teste de login com sucesso

    it.only('User Login Update - Success', () => {  //it.skip -> pula a funcao
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).clear().type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).clear().type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('MyFone')
    cy.get(selectorsList.middleName).clear().type('JBL')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    //cy.get(selectorsList.nickNameField).eq(4).type('nickNameTest') -> use eq(equal) para definir o elemento na página
    cy.get(selectorsList.employIdField).clear().type('1403')
    cy.get(selectorsList.dateField).clear().type('2000-11-09')
    cy.get(selectorsList.buttonDateField).click()
    cy.get(selectorsList.buttonGuardar).click()
    cy.get('body').should('contain', 'Successfully Updated')

  })


//Cenario de login sem sucesso

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCredencialAlert)   
    cy.get('.oxd-toast-content')
  })
})