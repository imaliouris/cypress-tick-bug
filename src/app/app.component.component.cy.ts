import {AppComponent} from "./app.component";


describe('AppComponent', () => {
  it('should resend code after 2 minutes', () => {
    cy.clock()
    cy.mount(AppComponent)

    cy.get('[data-test="counter"]').should('be.disabled')

    cy.tick(120000)

    cy.get('[data-test="counter"]').should('not.be.disabled')
  })
})
