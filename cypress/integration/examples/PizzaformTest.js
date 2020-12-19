describe("Pizza Test",()=>{
    beforeEach(()=>{
        cy.visit('localhost:3000/pizza');
    });

    const nameInput = () => cy.get('input[name="name"]');
    const size = () => cy.get('select');
    const radio = () => cy.get('input[type="radio"]');
    const checkbox = () => cy.get('input[type="checkbox"]');
    const submitButton = () => cy.get('#submit');
    const special = () => cy.get('textarea[name="special"]')

    it('name check',()=>{
        nameInput().type('Ruben'),
        nameInput().should('have.value','Ruben')
    })
    it('toppings check',()=>{
        checkbox().check()
    })
    it('submit',()=>{
        nameInput().type('ruben')
        size().select('large').should('have.value','large')
        radio().check()
        checkbox().check()
        special().type('pizza please')
        submitButton().should('not.be.disabled')
    })
})