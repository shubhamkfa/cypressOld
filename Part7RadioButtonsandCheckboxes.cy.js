/// <reference types="cypress" />

describe ('radiobuttonandCheckbox', () => {


    it.skip('radiobutton',()=> {
            cy.visit('https://omayo.blogspot.com/')

            //visibility of radio button
            cy.get("input#radio1").should('be.visible')
            cy.get("input#radio2").should('be.visible')

            //selecting radio button
            cy.get("input#radio1").check().should('be.checked')
            cy.get("input#radio2").should('not.be.checked')



    })
    it('checkingcheckboxes',()=> {
        cy.visit('https://omayo.blogspot.com/')

        //visibility of element
        cy.get("input[value='Pen'][name='accessories']").should('be.visible')
        cy.get("input[value='Pen'][name='accessories']").check().should('be.checked')

        //unselecting checkbox
        cy.get("input[value='Book']").uncheck().should('not.be.checked') //negative assertion

        //selecting all the checkboxes  // for single element or multiple element we have same command cy.get
        cy.get("input[type='checkbox'][name='accessories']").check().should('be.checked')
        cy.get("input[type='checkbox'][name='accessories']").uncheck().should('not.be.checked')

        //wanted to check first or last checkbox 
        cy.get("input[type='checkbox'][name='accessories']").first().check()
        cy.get("input[type='checkbox'][name='accessories']").last().check()
        cy.scrollTo('bottomRight')
        cy.scrollTo('bottomLeft')
      ;
})
})



