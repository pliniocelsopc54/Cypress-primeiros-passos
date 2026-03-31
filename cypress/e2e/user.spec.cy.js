import userData from '../fixtures/user-data.json'
import LoginPage from '/Cypress/cypress/pages/loginPage.js'
import DashboardPage from '../cypress/pages/dashboardPage.js'
import MenuPage from '../cypress/pages/menuPage.js'
import MyInfoPage from '../cypress/pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {
  const selectorsList = {   
    imageField: '.orangehrm-edit-employee-image > .employee-image',
    addCrossImage: '.oxd-file-div > .oxd-icon-button',      
    saveButtonImage: '.oxd-button'
  }

  //Teste de login com sucesso

    it('User Login Update - Success', () => {  //it.only -> executa apenas essa funcao / it.skip -> pula a funcao
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()   
    myInfoPage.fillPersonalDetails('My First', 'Fone', 'JBL')    
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId', '123456', '2026-26-03')    
    myInfoPage.fillStatus()
    myInfoPage.saveform()
    myInfoPage.fillCustonField()   
    
    /*cy.get(selectorsList.bloodTypeField).click()
    cy.get('.oxd-select-dropdown > :nth-child(8)').click()
    cy.get(selectorsList.testField).click()                 //campo Test_Field
    cy.get(selectorsList.testField).clear().type('1982')
    cy.get(selectorsList.secondSaveButton).click()*/

    /*cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.addButton).click()
    cy.get(selectorsList.browseButton).click()   
    cy.get('input[type="file"]').selectFile('TesteCypress.txt', { force: true }); //comando para fazer upload de imagem
    cy.get(selectorsList.commentField).click()
    cy.get(selectorsList.commentField).clear().type('Alteração bem sucedida. Parabéns!!!')
    cy.get(selectorsList.lastSaveButton).click()
    cy.get(selectorsList.imageField).click()
    cy.get(selectorsList.addCrossImage).click()
    cy.get('input[type="file"]').selectFile('black_hole.png', { force: true }); //comando para fazer upload de imagem
    cy.get(selectorsList.saveButtonImage).click()*/

  })
  
})