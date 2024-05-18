/*
describe('My First Test', () => {  // suite name 

    it('test1-verify title - positive ', () => {  //it block
        //steps
        cy.visit("https://client.kfadvance-dev.com/login") //cy.visit route package or route module 
        cy.title ().should('eq','Korn Ferry Advance')


    //   expect(true).to.equal(true)
    })

    it('test2- Verify Title-Negative Test', () => {  //it block
        //steps
        cy.visit("https://client.kfadvance-dev.com/login") //cy.visit route package or route module 
        cy.title ().should('eq','Log in to your accountKornferry')


    //cypress follow mocha framework
    })

  })
//npx cypress run
//npx cypress run --headed
  //npx cypress run --browser chrome
  //npx cypress run --browser chrome --headed


  //Test Suites ---> Test Cases ----> Test Steps (hieracy)
  //Spec File (cy.js)  ----> Describe block (test suites)----> it block(Test  case)
/*


  Part 5:- //Cypress Assertions - all assertion derived from child library

  1. Implicit assessrtions (Build in assertion supported by cypress)
  Should
  and

  inside should multiple parameters are supported.
  eq
  contain
  include
  exist
  have.lenght
  have.value
  be.visible
  not.contain



  2.Explicit Assertions (we need to write explicitly)
  expect ( bdd approach framwork) Behaivioral driven development approach
  assert (Tdd approach framwork) Test driven development approach

  expect 
  assert





*/
// const { expect } = require("chai")

// const { assert } = require("chai")

 


describe ("Assertion demo", () => {
//implicit -> should , and
  /*
  it("Implicit assertion URL",() =>{
    
    cy.visit("https://client.kfadvance-dev.com/login")
    //we need to capture the url so we will use below command
    cy.url().should('include','client.kfadvance-dev.com/login') //whatever url we capture that url should include this specific text command - include
    cy.url().should('eq','https://client.kfadvance-dev.com/login') //whatever url we provide it should match with exact url so we used eq command here
    
    
    //we dont need to add same method everytime we can use like below if it is followed by same keyword
    cy.url().should('contain','kfadvance-dev')
    .should('include','client.kfadvance-dev.com/login') 
    .should('eq','https://client.kfadvance-dev.com/login') 


    //we can use .and rather than .should  like below
    cy.url().should('contain','kfadvance-dev')
    . and('include','client.kfadvance-dev.com/login') 
    .and('eq','https://client.kfadvance-dev.com/login') 


    //negative assertion - we are using .not contains keayword here

    cy.url().should('contains','kfadvance-dev')
    . and('include','client.kfadvance-dev.com/login') 
    .and('not.contain','/register') ;
    



  })
  */

  /*
//if we want to capture title on webpage then we can use below command
  it('TitleonUI', () => {
    cy.visit("https://client.kfadvance-dev.com/login")
    //for capturing title we can use
    cy.title().should('include','Log in to your account')
    .and('eq','Log in to your account')
    .and('contains','Log');


  })
  */
  /*
  
  //for checking logo ot element we can use this 
  it('TForCheckingElementorLogo', () => {
    cy.visit("https://client.kfadvance-dev.com/login").wait(4000)
    //for capturing title we can use
  
    // .and('eq','Log in to your account')
    // .and('contains','Log');
    //here we can pass single parameter for visibility it will check visibility of element aor it will check element is exist on page or not
    cy.get('.sc-gRtvSG').should('be.visible') //check visibility
    cy.get('.sc-gRtvSG').should('exist') //check existance
  })

  */

 
  //capturing all link
   /*
  it('capturinglinks and value check', () => {
    cy.visit("https://client.kfadvance-dev.com/login").wait(4000)
    //cy.xpath("//a").should('have.length','0'); //no of links not working for me need t discuss
    cy.get('#email').type('shubham') // we have provided value and and we want to verify value so 
    .should('have.value','shubham') //value check


    ;

  })
  */


  //--------------------------------Explicit assertion -----------------------------------------

  it('Explicit Assertion_ BDD expect and assert', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type('Admin') 

    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    //-------for explicit assertion we need to write our own javascript functions 
    //so we are writing function belpw
    let expectedName="xyz";
    cy.get('.oxd-userdropdown-name').then(   (x)=>{
        let actualName=x.text()
        expect(actualName).to.equal(expectedName)


    })



    

  })


    it('Explicit Assertion_ BDD expect and assert', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type('Admin') 

    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    //-------for explicit assertion we need to write our own javascript functions 
    //so we are writing function belpw
    let expectedName="xyz";
    cy.get('.oxd-userdropdown-name').then(   (x)=>{
        //BDD style
        // let actualName=x.text()
        // expect(actualName).to.equal(expectedName)

        //TDD Style
        assert.equal(actualName,expectedName)
        assert.notEqual(actualName,expectedName)


    })



    

  })



})



