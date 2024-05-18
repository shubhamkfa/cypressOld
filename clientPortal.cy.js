
describe('Login Page',                   () => {

    it('Login Page', () => {
        cy.visit("https://client.kfadvance-dev.com/login").wait(4000)
        cy.viewport(1380,680) 
        cy.get("#email").type("shubhamkfa+v2CDTest4+d1405@gmail.com")
        .get("[type='button']").click()
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(4000)
        // cy.get(".label.textselected").contains("HOME")
        // cy.xpath("//button[normalize-space()='+ Add Goal']").click()
        // cy.get("#goals-dropdown").click("#mui-7 > li:nth-child(5) > div > span")
        // cy.get("#goalTitle").type("Goals added by automation script")
        // cy.get("#chat-input").type("Goals added by automation script Using Cypress By shubham Shinde")
        // cy.get("save-goal-btn").click();
        

        
   
                                                             
                        





    })
})