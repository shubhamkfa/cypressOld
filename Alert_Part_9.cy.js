/// <reference types="cypress" />





describe('Alert',()=>{

    //1) Javascript alert: It will have some text and an 'Ok' button
    //2) Javascript Confirm Alert: It will have some text with 'OK' and Cancel buttons
    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' button
    //4) Authenticated Alert

    it.skip('simple alert OK',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        //we successfully click on ok button 
        //but we want to capture the text so we need to add event
        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am a JS Alert');

        })
        cy.get('#result').should('have.text','You successfully clicked an alert');

    })


//if i want to execute one it block only one block without using skip then we can use only
    it.skip('Confirmation Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        //we successfully click on ok button 
        //but we want to capture the text so we need to add event
        cy.on('window:confirm',(t)=>{

            expect(t).to.contains ('I am a JS Confirm');

        })
        //cypress automatically close alert window by using ok button by default
        cy.get('#result').should('have.text','You clicked: Ok');







    })


    it.skip('Confirmation cancelation',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        //we successfully click on ok button 
        //but we want to capture the text so we need to add event
        cy.on('window:confirm',(t)=>{

            expect(t).to.contains ('I am a JS Confirm');

        })
        //we want to cancel then we can use below event 
        cy.on('window:confirm',()=>false); //cypress closes alert window using cancel button

        cy.get('#result').should ('have.text','You clicked: Cancel');

        





    })

    it.skip('JS Prompt Alert Ok',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //this event has to be done before clicking so we are using below method
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click()

        // cy.on('window:prompt',()=>false);

        //cypress automatically close prompted alert - it will use ok button by default
        cy.get('#result').should('have.text','You entered: welcome');

    })


    //4 Authenticated Alert


    it.skip('AuthenticatedAlert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //this event has to be done before clicking so we are using below method
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click()

        // cy.on('window:prompt',()=>false);

        //cypress automatically close prompted alert - it will use ok button by default
        cy.get('#result').should('have.text','You entered: welcome');

    })





})