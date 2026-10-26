import userData from '../fixtures/user-data.json'
import LoginPage from '/Cypress/cypress/pages/loginPage.js'
import DashboardPage from '../cypress/pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {
  const selectorsList = {   
    imageField: '.orangehrm-edit-employee-image > .employee-image',
    addCrossImage: '.oxd-file-div > .oxd-icon-button',      
    saveButtonImage: '.oxd-button'
  }

//Cenario de login sem sucesso

  it.skip('Login - Fail', () => {    
    //cy.visit('/auth/login')   //foi substituido pelo accessLoginPage
    loginPage.accessLoginPage()    
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password) 
    loginPage.checkAccessInvalid() 
    cy.get('.oxd-alert-content > .oxd-text')       
  })

  it('Login - Success', () => {     
    loginPage.accessLoginPage()    
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage() 
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click() //clica em My Info
    cy.get('[name="firstName"]').click()
    cy.get('[name="firstName"]').clear()
    cy.get('[name="firstName"]').type('Imaginary')
    
    cy.get('[name="lastName"]').click()
    cy.get('[name="lastName"]').clear()
    cy.get('[name="lastName"]').type('Man')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    
  })

})