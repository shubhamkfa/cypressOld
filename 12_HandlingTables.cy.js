// const { beforeEach } = require("mocha")

// const { expect } = require("chai")

describe('Handelingtables',()=>{

    // we can use before each if we want to visit same url for all it block to execute
    it.skip('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/")
        cy.get('#input-username').type("demo")
        cy.get("#input-password").type("demo")
        cy.get('button[type="submit"]').click()
        window:alert;
        cy.get(".btn-close").click()
        .wait(1000)

        cy.get("#menu-customer>a").click()
        cy.get('#collapse-5>li:nth-child(1)').click()


    })

    it.skip('1.CheckNumberRowANdColumn',()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7');

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('not.have.length','11');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('not.have.length','8')
        


    })


    beforeEach('handlingTable',()=>{

        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('contains','codenbox');

        cy.wait(3000)


    })
    //find any text within table 
    //video link ( https://www.youtube.com/watch?v=OP4NQBJieWE )
    it('findText',function (){

        cy.get('table>tbody>tr>td').contains('td','Appium').should('be.visible')

    })

    //conditional Logic - if the course name is webservices then price is 30

    it('findvaluebyLogic',()=>{
// we need to use condiutional statement 
//$el - variable hold every individual values from start  store the value
//index  while index
// loop is mentioning list as a array
        cy.get('table>tbody>tr td:nth-child(2)').each(($el, index , $list) =>{
            var textFind=$el.text()
            if(textFind.includes('WebServices')){
                cy.get('table>tbody>tr td:nth-child(3)').eq(index).then(function(price){
                    var actualPrice=price.text()
                    expect(actualPrice.trim()).to.equal('30')
                })
            }
        })

})

})
