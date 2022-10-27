import rgbHex from 'rgb-hex'

/*******************************************************************************
//
// This script include following script
// 1. login https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// 2. verify login successfully
// 3. Click PIM link and verify employee page display correctly
// 4. Add an employee and verify employee added successfully
// 5. search an employee and verify employee is finded successfully.
// 6. delete an employeed and verify employee is deleted suceesfully
// 7. edit an employeed and verify edit completed sucessfully
//
// ******************************************************************************/

describe('Test PIM link', ()=>{
    beforeEach('login the website', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin','admin123')
        cy.wait(1000)
    })

    // click PIM link
    it('Verify PIM tab', ()=>{
                
        cy.contains('Employee Information')
            .should('have.text', 'Employee Information')

        // Verify column's name are displaying correctly
        cy.get('.oxd-label')
            .eq(0).should('contain.text', 'Employee Name')
        
        cy.get('.oxd-label')
            .eq(1).should('have.text', 'Employee Id')

        cy.get('.oxd-label')
            .eq(2).should('have.text', 'Employment Status')

        cy.get('.oxd-label')
            .eq(3).should('have.text', 'Include')

        cy.get('.oxd-label')
            .eq(4).should('have.text', 'Supervisor Name')

        cy.get('.oxd-label')
            .eq(5).should('have.text', 'Job Title')

        cy.get('.oxd-label')
            .eq(6).should('have.text', 'Sub Unit')


        
        // Verify total counts of row before add new rows
        cy.get('.oxd-table-body')
        .find('.oxd-table-card')
        .then((row) => {
        //row.length will give you the row count
        //rowCountBefore = row.length
        cy.log('rows before ' + row.length);
        })
        
        // Click Add new employee button
        cy.log('Add new employee');
        cy.contains('Add')
            .click()
        
        cy.contains('Add Employee')
            .should('have.text', 'Add Employee')

        cy.wait(1000)

        // Add new employee 
        // add firste name --Amy
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
            .type('Amy')
        
        // add last name --Tester
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
            .type('Tester')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)')
        
        // click save button
        cy.get('.oxd-button--secondary')
            .click()
        
        cy.wait(4000)
        
        // click employee list
        cy.contains('Employee List')
            .click()

        // verify 'Amy' was added successfully
        cy.wait(4000)
        cy.get('div').contains('Amy').should('be.visible')
        cy.wait(4000)

        // After row counts
        cy.get('.oxd-table-body')
        .find('.oxd-table-card')
        .then((row) => {
        //row.length will give you the row count
        //rowCountBefore = row.length
        cy.log('rows after ' + row.length);
        })

        // delete record 'Amy'
        cy.get('div.oxd-table-body').contains('.oxd-table-row','Amy').within(()=>{
            //cy.get('i').eq(0).click()
            cy.get('button').eq(0).click({force: true})
            cy.wait(2000)
          
       })
       cy.get('.oxd-button--label-danger > .oxd-icon').click()
       cy.wait(2000)

       // Verify javascript message Success display
       cy.get('.oxd-text--toast-title')
        .should('contain.text', 'Success')
       
       // After delete and do row counts
       cy.get('.oxd-table-body')
       .find('.oxd-table-card')
       .then((row) => {
       //row.length will give you the row count
       //rowCountBefore = row.length
       cy.log('rows after delete ' + row.length);
       })

       // Verify search feature
       cy.get('.oxd-select-text--arrow.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow')
        .eq(0).click({force: true})
       cy.contains('Full-Time Contract')
        .click()
        cy.wait(200)

        cy.get('.oxd-select-text--arrow.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow')
        .eq(2).click({force: true})
        cy.contains('Account Assistant')
            .click()
        cy.wait(200)

        cy.contains('Search')
            .click({force: true})
        cy.wait(100)
        cy.contains('Alice')
            .should('be.visible')




       
             
        
    })
    
})