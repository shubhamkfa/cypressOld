describe('dropDown', () => {
//select dropdown
    it.skip('dropdownselection',()=> {

        cy.visit("https://admin.kfadvance-qa.com").wait(1000)
        cy.viewport(1380,680) 
        cy.get("#email").type("kfa.adm1@gmail.com")
        .get("[type='button']").click().wait(1000)
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(6000)
        cy.get('#combo-box-demo').click().type('Test_Shubh_ss1QA')
        

    })

    //
    it.skip('dropdownAutoSuggestion',()=> {

        cy.visit("https://admin.kfadvance-qa.com").wait(1000)
        cy.viewport(1380,680) 
        cy.get("#email").type("kfa.adm1@gmail.com")
        .get("[type='button']").click().wait(1000)
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(6000)

        cy.xpath("//input[@id='combo-box-demo']").click().type('Test_Shubh_ss1QA')
        cy.xpath("//li[@id='combo-box-demo-option-0']").click()
        cy.xpath("//*[name()='path' and contains(@d,'M13 7h-2v4')]").click()
        .get('#mui-60').type('')


        // cy.get('.MuiAutocomplete-endAdornment')
        // .type('shubh').click();


        // cy.get('.MuiAutocomplete-endAdornment > .MuiButtonBase-root').wait(2000).click().type('Test_Shubh_ss1QA')

        // cy.get('#combo-box-demo').click()
        // cy.get("#combo-box-demo[value='Test_Shubh_ss1QA']").wait(2000).type('Test_Shubh_ss1QA').type('{enter}')

    })


    

     
    it.skip('dropdownAutoSuggestion',()=> {

        cy.visit("https://admin.kfadvance-qa.com").wait(1000)
        cy.viewport(1380,680) 
        cy.get("#email").type("kfa.adm1@gmail.com")
        .get("[type='button']").click().wait(1000)
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(6000)

        // cy.get('body')
        // cy.xpath('//*[@id="Path_23991"]').wait(4000)
        cy.get('body').click()
        cy.xpath("//button[normalize-space()='Add Client']").click()
        cy.xpath('//*[@id="mui-29"]').type("Test_shubh_ss1_170524")
        cy.xpath('//*[@id="mui-30"]').type("gmail.com")
        cy.xpath('/html/body/div[2]/div[3]/div[3]/button[2]').click();



        // cy.xpath("//input[@id='combo-box-demo']").click().type('Test_Shubh_ss1QA')
        // cy.xpath("//li[@id='combo-box-demo-option-0']").click()
        // cy.xpath("//*[name()='path' and contains(@d,'M13 7h-2v4')]").click()
        // .get('#mui-60').type('')


        // cy.get('.MuiAutocomplete-endAdornment')
        // .type('shubh').click();


        // cy.get('.MuiAutocomplete-endAdornment > .MuiButtonBase-root').wait(2000).click().type('Test_Shubh_ss1QA')

        // cy.get('#combo-box-demo').click()
        // cy.get("#combo-box-demo[value='Test_Shubh_ss1QA']").wait(2000).type('Test_Shubh_ss1QA').type('{enter}')

    })


    it('dropdownAutoSuggestiondynamicwithJquery',()=> {

        cy.visit("https://www.google.com/") //'cypress automation'

        cy.get('#APjFqb').type("cypress automation")
        .wait(2000)
       cy.get('#vTtioc > .wM6W7d > span').click()



       /*
        cy.get('[data-layer="Content"]').each ( ($el,index, $list) =>{

            if($el.text()=='cypress automation tool')
                {
                    cy.wrap($el).click()
                 }
        } )
        cy.get('#APjFqb').should('have.value','cypress automation tool');
        */
    })



})