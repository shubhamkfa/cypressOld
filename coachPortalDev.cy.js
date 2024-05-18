
describe('Login Page', () => {

    it('AddEligibilityforV2Dev', () => {
        cy.visit("https://coach.kfadvance-dev.com/login").wait(1000)
        cy.viewport(1380,680) 
        cy.get("#email").type("amarri.kf+dev-coach@gmail.com")
        .get("[type='button']").click().wait(1000)
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(6000)
        
        cy.get("div[aria-label='User Eligibility'] span[class='material-icons notranslate MuiIcon-root jss25 jss12 MuiIcon-fontSizeMedium mui-1jgtvd5']")
        .click().wait(4000)
        cy.xpath("//button[normalize-space()='Select a Cohort']")
        // .get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedInherit.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorInherit.MuiButton-root.MuiButton-contained.MuiButton-containedInherit.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorInherit.sc-eHsDsR.gMyUcD.mui-1fqsg3k")
        .click().wait(4000)
        cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/div/input').click().wait(1000).type("Enterprise Coaching V2 (Int LP360 + LPA)").wait(4000)
        // cy.get("li[class='rct-node rct-node-parent rct-node-expanded'] li[class='rct-node rct-node-parent rct-node-expanded'] span[class='rct-title']")
        cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/ol/li[221]/ol/li[10]/span/button')
        .click().wait(4000)
        cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/ol/li[221]/ol/li[10]/ol/li[1]/span/label/span[2]').click()
        //cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/ol/li[221]/ol/li[10]/ol/li[1]/span/label/span[1]/svg').wait(4000).click()
        cy.xpath('/html/body/div/main/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[1]/div/div/div/input')
        

        .type("shubhamkfa+V2Test1+d1805A@gmail.com")
        cy.xpath("//input[@id='externalId']").type("test180501")

        cy.xpath("//input[@id='firstName']").type("V2Test1")
        cy.xpath("//input[@id='lastName']").type("d1805A")


        cy.xpath('/html/body/div/main/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[3]/div/div[11]/span/div/div/div').click()
        cy.xpath('/html/body/div[2]/div[3]/ul/li[3]/div/span').click().wait(1000)
        cy.get("#RequestID").type("5259")
        cy.get("#KF360RoleID").type("5259")
        cy.xpath('//*[@id="OverrideSSO"]').click()
        cy.xpath('//*[@id="root"]/main/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[4]/button[1]').click();
        window:alert;



    })

    it.skip('AddEligibilityforV2QA', () => {
        cy.visit("https://coach.kfadvance-qa.com/login").wait(1000)
        cy.viewport(1380,680) 
        cy.get("#email").type("banutrkf+jun18-kfa-adm1@gmail.com")
        .get("[type='button']").click().wait(1000)
        cy.get("#password").click().type("Conference1!")
        .get("#login-btn").click().wait(6000)
        
        cy.get("div[aria-label='User Eligibility'] span[class='material-icons notranslate MuiIcon-root jss25 jss12 MuiIcon-fontSizeMedium mui-1jgtvd5']")
        .click().wait(4000)
        cy.xpath("//button[normalize-space()='Select a Cohort']")
        // .get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedInherit.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorInherit.MuiButton-root.MuiButton-contained.MuiButton-containedInherit.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorInherit.sc-eHsDsR.gMyUcD.mui-1fqsg3k")
        .click().wait(4000)
        cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/div/input').click().wait(1000).type("Enterprise Coaching V2 (Int LP360 + LPA)").wait(4000)
        // cy.get("li[class='rct-node rct-node-parent rct-node-expanded'] li[class='rct-node rct-node-parent rct-node-expanded'] span[class='rct-title']")
        cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/ol/li[221]/ol/li[10]/span/button')
        .click().wait(4000)
        cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/ol/li[221]/ol/li[10]/ol/li[1]/span/label/span[2]').click()
        //cy.xpath('/html/body/div[2]/div[3]/div/div/div/section/div/div/ol/li[221]/ol/li[10]/ol/li[1]/span/label/span[1]/svg').wait(4000).click()
        cy.xpath('/html/body/div/main/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[1]/div/div/div/input')
        

        .type("shubhamkfa+V2Test1+qa1705A@gmail.com")
        cy.xpath("//input[@id='externalId']").type("Test1705101")

        cy.xpath("//input[@id='firstName']").type("V2Test1")
        cy.xpath("//input[@id='lastName']").type("qa1705A")


        cy.xpath('/html/body/div/main/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[3]/div/div[11]/span/div/div/div').click()
        cy.xpath('/html/body/div[2]/div[3]/ul/li[3]/div/span').click().wait(1000)
        cy.get("#RequestID").type("5259")
        cy.get("#KF360RoleID").type("5259")
        cy.xpath('//*[@id="OverrideSSO"]').click()
        cy.xpath('//*[@id="root"]/main/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[4]/button[1]').click();
        window:alert;



    })





    




})