class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleName: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            nickNameField: 'nomedoinput',
            employIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
            driverNumberField: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            dateField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            buttonDateField: ".--close",
            NacionalityField: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
            MaritalStatusField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            birthField: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            militaryServiceField: '[data-top="913.8823698085937"]',
            genderRadioButton: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
            buttonGuardar: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
            bloodTypeField: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            testField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
            /*secondSaveButton: '.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button',*/
            /*addButton: '.orangehrm-action-header > .oxd-button',
            browseButton: '.oxd-file-div > .oxd-icon',
            commentField: '.oxd-textarea',
            lastSaveButton: '.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary',*/

        }
        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleName).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().nickNameField).eq(4).type('nickNameTest') -> use eq(equal) para definir o elemento no menu
    }
    fillEmployeeDetails(employId, otherId, driversLicenseNumber, LicenseExpiryDate) {
        cy.get(this.selectorsList().employIdField).clear().type(employId)
        cy.get(this.selectorsList().otherIdField).clear().type(otherId)
        cy.get(this.selectorsList().driverNumberField).clear().type(driversLicenseNumber)    
        cy.get(this.selectorsList().dateField).clear().type(LicenseExpiryDate)
        
    }
    saveform() {
        cy.get(this.selectorsList().buttonGuardar).click()
    }
    fillStatus() {
        cy.get(this.selectorsList().NacionalityField).click()
        cy.get(':nth-child(27) > span').click()
        cy.get(this.selectorsList().MaritalStatusField).click()
        cy.get(':nth-child(3) > span').click()
        cy.get(this.selectorsList().birthField).click()
        cy.get(this.selectorsList().birthField).clear().type('1982-14-03')    
        cy.get(this.selectorsList().genderRadioButton).click()
    }
    
    fillCustonField() { //fazer essa função funcionar
        cy.get(this.selectorsList().bloodTypeField).click()
        //cy.get(this.selectorsList().testField).clear().type('TesteJunior')

    }

}
export default MyInfoPage