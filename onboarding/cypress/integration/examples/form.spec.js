describe('Form tests', () => {
    describe('input tests', () => {
        it('navigate to http://localhost:3000', () => {
            cy.visit('http://localhost:3000')
            cy.url().should('include','localhost')
        })
        it('can type in the name field and check the input, then delete the name', () => {
            cy.get('input[name="first_name"]')
            .type('Nam')
            .type('{backspace}')
            .type('m')
            .should('have.value', 'Nam')
        })

        it('can type email address', () => {
            cy.get('input[name="email"]')
            .type('namwoo@gmail.com')
        })

        it('can type password', () => {
            cy.get('input[name="password"]')
            .type('password123')
        })

        it('can check checkbox', () => {
            cy.get('[type="checkbox"]').check() 
            .should('be.checked')
        })

        it('check if add user button is is not disabled', ()=>{             
            cy.get('button').should('not.be.disabled')             
            .click()         
        })     

    })
})


