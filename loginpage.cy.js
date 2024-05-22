/// <reference types ="cypress-xpath"/>
describe('Login Page',() => {

    it('Login Page', () => {

        cy.visit("https://client.kfadvance-dev.com/login").wait(4000)
        cy.viewport(1380,680) 
        cy.xpath('//*[@id="email"]')

        cy.get("#email").type("shubhamkfa+v2CDTest4+d1405@gmail.com")
        .get("[type='button']").click()
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(4000)
        cy.get(".label.textselected").wait(6000)
        cy.contains("HOME");
       
        

    })


} )