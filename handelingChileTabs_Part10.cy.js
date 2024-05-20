//by default cypress dosent handle this we can handle this by changing attribute of the element
describe('OpeninNewWindow',()=>{
//Handle tab-approach
    it('Element_Changes',()=>{


        cy.visit('https://the-internet.herokuapp.com/windows')
        //if we want to remove any attribute we can use command invoke and removeattr
        cy.get(".example >a").invoke('removeAttr','target').click()

    })



})