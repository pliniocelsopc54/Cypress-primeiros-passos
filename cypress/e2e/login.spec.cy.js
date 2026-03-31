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

  it('Login - Fail', () => {    
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
  })

})