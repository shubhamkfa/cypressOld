describe('Handelingtables',()=>{

    // we can use before each if we want to visit same url for all it block to execute

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/")
        cy.get('#input-username').type("demo")
        cy.get("#input-password").type("demo")
        cy.get('button[type="submit"]').click()
        window:alert;
        cy.get(".btn-close").click()

        cy.get("#menu-customer>a").click()
        cy.get('#collapse-5>li:nth-child(1)').click()


    })

    it('1.CheckNumberRowANdColumn',()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7');

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('not.have.length','11');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('not.have.length','8');
        







    })






})