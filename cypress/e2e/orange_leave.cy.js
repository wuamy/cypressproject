import rgbHex from 'rgb-hex'

/****************************************************************
// This script test leave feature. it includes following items
//  1. Verify page title
//  2. Verify page lay-out, form, fields, buttons, button-color
//  3. Verify Approve action
//  4. Verify Reject action
//  5. Verify Add comments
//  6. Verify View leave detail
//  7. Verify Cancel leave
//  8. Verify PIM view
// 
// Script Update: 10/3/2022
 ****************************************************************/
describe('Test Leave Feature', ()=>{
    beforeEach('login the website', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // login the website
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
           .type('Admin')
           .should('have.value','Admin')
            
        // enter password
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        cy.get('input[name=password]')
            .type('admin123')
            .should('have.value', 'admin123')
                
        // click login button
        cy.get('.oxd-button')
            .click()

        cy.wait(2000)
    })

    // Start here
    it('Verify Leave link',()=>{
        // click leave link
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text')
            .click()
        cy.wait(100)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
            .should('contain.text','Leave')
        
    })
})
