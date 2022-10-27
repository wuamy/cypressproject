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
        cy.login('Admin','admin123')
        cy.wait(2000)
    })

    // Start here
    it('Verify Leave link',()=>{
        // click leave link
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text')
            .click()
        cy.wait(100)
        // verify page url
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
        
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
            .should('contain.text','Leave')

        cy.get('.oxd-main-menu-search > .oxd-icon-button')
            .click()
        cy.wait(500)

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(0).should('contain.text', 'Apply')
        
        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(1).should('contain.text', 'My Leave')

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(2).should('contain.text', 'Entitlements')

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(3).should('contain.text', 'Reports')

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(4).should('contain.text', 'Configure')

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(5).should('contain.text', 'Leave List')

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(6).should('contain.text', 'Assign Leave')

        // Verify Apply leave page
        cy.contains('Apply')
            .click()
        cy.wait(200)
        cy.get('.orangehrm-card-container > .oxd-text--h6')
            .should('contain.text', 'Apply Leave')

        cy.get('label').eq(0)
            .should('contain.text', 'Leave Type')
        cy.get('label').eq(1)
            .should('contain.text', 'Leave Balance')
        cy.get('label').eq(2)
            .should('contain.text', 'From Date')
        cy.get('label').eq(3)
            .should('contain.text', 'To Date')
        cy.get('label').eq(4)
            .should('contain.text', 'Comments')
        
        // Verify button 
        cy.get('.oxd-button')
            .should('contain.text','Apply')
        
        // Verify button color
        cy.get('.oxd-button')
            // .invoke('css','background-color')
            // .then((bgcolor)=>{
            //     expect(rgbHex(bgcolor)).to.eq('668242')
            // })
            .should('have.css','background-color')
            .and('eq', 'rgb(100, 128, 64)')

        // apply leave
        cy.get('.oxd-select-text-input')
            .eq(0).click()
            .type('{downarrow}').click({ force: true })
        cy.wait(200)
            
        // enter date from calendar
        cy.get('.bi-calendar').eq(0).click()
        cy.contains('1').click()
        cy.wait(100)
        cy.get('.bi-calendar').eq(1).click()
        cy.contains('10').click()

        cy.get('.oxd-select-text-input')
            .eq(1).click()
            .type('{downarrow}')
        cy.get('[data-v-2fe357a6=""] > .oxd-text')
            .click()

        cy.get('.oxd-textarea')
            .type('test apply')
        cy.wait(100)

        cy.get('.oxd-button').click()
                    




             

        
    })
})
