class LoginPage {
    
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            WrongCredencialAlert: "[role='alert']",
        }
        return selectors
    }    

    accessLoginPage() {
        cy.visit('/auth/login')    
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).clear().type(username)
        cy.get(this.selectorsList().passwordField).clear().type(password)
        cy.get(this.selectorsList().loginButton).click()        
    }    
}
export default LoginPage