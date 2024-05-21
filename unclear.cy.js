describe('Iframe',()=>{
    //not working for me need to get understand 
    it.skip("iframeapproach1",()=>{

        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame").wait(2000)



        const iframe=cy.get("#s")
        //as fram content in document so we use below 0 refers to one document and we can use below command
        .its('0.contentDocument.body')
        //we can verify the same visibility
        .should('be.visible')

        //we need to wrap that document 
        .then(cy.wrap);

        iframe.clear().type("shubham Is a god {ctrl+a}");



    })



})