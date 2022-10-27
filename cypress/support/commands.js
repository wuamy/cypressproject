// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (id, password) => { 
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
           .type(id)
           .should('have.value',id)
            
    // enter password
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    cy.get('input[name=password]')
        .type(password)
        .should('have.value', password)
                
    // click login button
    cy.get('.oxd-button')
        .click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })