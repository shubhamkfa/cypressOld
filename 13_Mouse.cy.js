//need to practise
import 'cypress-iframe'

require ('@4tw/cypress-drag-drop')
describe('UsingMouse',()=>{

    //trigger the mouse event using mouse over
    

    it.skip('MouseOver',()=>{
        cy.visit("https://www.browserstack.com/guide/cypress-touch-and-mouse-events").wait(1000).should('not.be.visible')

        cy.get('#products-dd-toggle').trigger('mouseover').click()
        cy.get("button[id='products-dd-tab-2'] div[class='item-desc']").trigger('mouseover').should('be.visible');

    })


    it.skip('Right click',()=>{

        //1 Aproach one with using 'contextmenu'
        cy.visit("https://www.browserstack.com/guide/cypress-touch-and-mouse-events").wait(1000).should('not.be.visible')
        // we are using contextmenu for performing right click operation 
        cy.get('#products-dd-toggle').trigger('contextmenu')
        
        // approach 2 : using rightclick 

        cy.visit("https://www.browserstack.com/guide/cypress-touch-and-mouse-events")
        // we are using contextmenu for performing right click operation 
        cy.get('#products-dd-toggle').rightclick()
        cy.get("button[id='products-dd-tab-1'] span[class='item-text']").should('be.visible')


    })

    
    it.skip('Double click',()=>{

      

        cy.visit("https://client.kfadvance-dev.com/login").wait(4000)
        cy.viewport(1380,680) 
        cy.get("#email").type("shubhamkfa+v2CDTest4+d1405@gmail.com")
        .get("[type='button']").click()
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(4000)
        cy.get(".label.textselected").wait(6000)
        cy.contains("HOME");
        //1. check if you are seeing microsft log
        cy.xpath("//img[@class='sc-gEvEer gQya-Dg header']").should('be.visible')
        cy.get(".sc-bvgPty.hneSZv.mastTitle").should('be.visible')
        cy.get("body > div:nth-child(2) > main:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
        .trigger('mouseover').click()
        cy.get("svg")
    })


    it.skip('Double click',()=>{

      cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
      cy.frameLoaded ('#iframeResult');// Load the frame for this we need to import iframe check first line 
      

      //aproach 1 - triggering event 
        cy.iframe ('#iframeResult') .find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.get("#field2").should('contain.text','Hello World!');
        
        //Aproach 2 with dblclick()
        cy.iframe ('#iframeResult') .find("button[ondblclick='myFunction()']").dblclick();
        cy.get("#field2").should('contain.text','Hello World!');

    })

    // for this we need to install one plugin :- npm install --save-dev @4tw/cypress-drag-drop
    // then we need to add  require ('@4tw/cypress-drag-drop')

    it.skip('Drag And Drop',()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106',{force:true}); // we have added this parameter for forcefully getting an element 



    })

    it.only('Scroll Down',()=>{

        cy.visit('https://www.w3schools.com/cssref/css_pr_scroll-margin-block-start.php')
        // i want to scrole the page 
        cy.get("a[href='tryit.php?filename=trycss_scroll-margin-block-start_writing-mode']").scrollIntoView({duration:3000})
        cy.get("a[href='tryit.php?filename=trycss_scroll-margin-block-start_writing-mode']").should('be.visible');

        cy.get("#mainLeaderboard").scrollIntoView({duration:2000})
        cy.get(".footertext").scrollIntoView({duration:100})
    })





})
