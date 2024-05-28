describe('MyTestSuites',()=>{

    //i want to launch my browser as prerequisite then we can write one method we want to execute it only once
    // before executing  then we can use below hooks 
    
    //before : which will execute before starting it block and it will execute only onces 
    //after : after hook will executed after execution of all it block  it will execute only onces

    //beforEach : beforeEach will execute just before it block all time for all it block, it will execute multiple times
    //afterEach : afterEach  will execute every time before it block and it will execute multiple time 


    // 1 launch your application 
    before(()=>{

        cy.log("Lanuch App")
    })
    // 2. i want to log out after complition of it blovk i want to log out 
    // we can end it in last and we have call it anywhere sequence dosent matter here 
    after(()=>{

        cy.log('****Log out****')


    })



    //3. if all it block needs togo through one page and it need to be for all it block then we can user 
    //beforeEach

    beforeEach(()=>{


        cy.log("****Login page or Home page***")
    })


    afterEach(()=>{

        cy.log("****Log out from application for specific it block*****")

    })


    it('Search',()=>{

        cy.log("******searching********")

    })


    it('AdvanceSearch',()=>{

        cy.log("******Advance searching********")

    })



    it('Listing Product',()=>{

        cy.log("******Listing Product********")

    })







})