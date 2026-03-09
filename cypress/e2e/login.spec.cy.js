
//Teste de login com sucesso

describe('Orange HRM Tests', () => {
  it('Login - Success', () => {  //it.skip -> pula a funcao
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
  })
})

//Cenario de login sem sucesso

describe('Orange HRM Tests', () => {
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('Test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')      
  })
})