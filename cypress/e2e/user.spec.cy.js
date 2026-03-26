import userData from '../fixtures/user-data.json'
import LoginPage from '/Cypress/cypress/pages/loginPage.js'
import DashboardPage from '../cypress/pages/dashboardPage.js'
import MenuPage from '../cypress/pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {
  const selectorsList = {
    /*usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",*/
    //secionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",  
    //dashboardGrid: ".oxd-layout-context", //verifica o campo DASHBOARD
    //WrongCredencialAlert: "[role='alert']",
    //myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    nickNameField: 'nomedoinput',
    employIdField: ':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driverNumberField: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    buttonDateField: ".--close",
    NacionalityField: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    MaritalStatusField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    birthField: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    militaryServiceField: '[data-top="913.8823698085937"]',
    genderRadioButton: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
    buttonGuardar: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
    bloodTypeField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    testField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    secondSaveButton: '.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button',
    addButton: '.orangehrm-action-header > .oxd-button',
    browseButton: '.oxd-file-div > .oxd-icon',
    commentField: '.oxd-textarea',
    lastSaveButton: '.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary',
    imageField: '.orangehrm-edit-employee-image > .employee-image',
    addCrossImage: '.oxd-file-div > .oxd-icon-button',      
    saveButtonImage: '.oxd-button'
  }

  //Teste de login com sucesso

    it.only('User Login Update - Success', () => {  //it.skip -> pula a funcao
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboardPage.checkDashboardPage()
      menuPage.accessMyInfo()



    /*cy.visit('/auth/login')                                                       //Este bloco de texto esta referenciado em loginPage
    //cy.get(selectorsList.usernameField).clear().type(userData.userSuccess.username)
    //cy.get(selectorsList.passwordField).clear().type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()*/
    /*cy.location('pathname').should('equal', '/web/index.php/dashboard/index')     //Este bloco de texto esta referenciado em dashboardPage 
    cy.get(selectorsList.dashboardGrid)*/
    //cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('MyFone')
    cy.get(selectorsList.middleName).clear().type('JBL')
    cy.get(selectorsList.lastNameField).clear().type('Niver')
    //cy.get(selectorsList.nickNameField).eq(4).type('nickNameTest') -> use eq(equal) para definir o elemento na página
    cy.get(selectorsList.employIdField).clear().type('1403')
    cy.get(selectorsList.otherIdField).clear().type('17032026')
    //cy.get(selectorsList.driverNumberField).clear().type('456789')    
    cy.get(selectorsList.dateField).clear().type('2000-11-09')    
    cy.get(selectorsList.buttonDateField).click()
    cy.get(selectorsList.NacionalityField).click()
    cy.get(':nth-child(27) > span').click()
    cy.get(selectorsList.MaritalStatusField).click()
    cy.get(':nth-child(3) > span').click()
    cy.get(selectorsList.birthField).click()
    cy.get(selectorsList.birthField).clear().type('1982-14-03')    
    cy.get(selectorsList.genderRadioButton).click()
    //cy.get(selectorsList.militaryServiceField).click().type('No.')
    cy.get(selectorsList.buttonGuardar).click()
    cy.get(selectorsList.bloodTypeField).click()
    cy.get('.oxd-select-dropdown > :nth-child(8)').click()
    cy.get(selectorsList.testField).click()                 //campo Test_Field
    cy.get(selectorsList.testField).clear().type('1982')
    cy.get(selectorsList.secondSaveButton).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.addButton).click()
    cy.get(selectorsList.browseButton).click()   
    cy.get('input[type="file"]').selectFile('TesteCypress.txt', { force: true }); //comando para fazer upload de imagem
    cy.get(selectorsList.commentField).click()
    cy.get(selectorsList.commentField).clear().type('Alteração bem sucedida. Parabéns!!!')
    cy.get(selectorsList.lastSaveButton).click()
    cy.get(selectorsList.imageField).click()
    cy.get(selectorsList.addCrossImage).click()
    cy.get('input[type="file"]').selectFile('black_hole.png', { force: true }); //comando para fazer upload de imagem
    cy.get(selectorsList.saveButtonImage).click()

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