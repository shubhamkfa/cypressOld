
describe('Login Page',                   () => {

    it('Registrtation Page', () => {

        cy.visit("https://client.kfadvance-dev.com/register").wait(4000)

        cy.get("#email").type("shubhamkfa+V2Test12+d1605A@gmail.com")

        .get("[type='button']").click()

        cy.xpath("//input[@id='firstName']").type("V2Test12")
        cy.xpath("//input[@id='lastName']").type("d1605A")


        cy.xpath("//input[@id='password']").type("Conference1!")
        cy.xpath("//input[@id='confirmPassword']").type("Conference1!").wait(1000)
        cy.xpath('//*[@id="privacy"]').click() .wait(1000)
        cy.xpath("//button[@id='register-btn']").click();




    })
})