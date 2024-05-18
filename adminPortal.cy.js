describe('Admin portal login ', () => {

    it('adminPortalQA', () => {
        cy.visit("https://admin.kfadvance-qa.com").wait(1000)
        cy.viewport(1380,680) 
        cy.get("#email").type("kfa.adm1@gmail.com")
        .get("[type='button']").click().wait(1000)
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(6000)

        cy.xpath('//*[@id="combo-box-demo"]').wait(4000).click().type('Test_Shubh_ss1QA').wait(2000)
        cy.xpath("//li[@id='combo-box-demo-option-0']").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[1]/button[1]/*[name()='svg'][1]").click()
        .get('#mui-60').type('MLLRegQA1805')
        
    })
})