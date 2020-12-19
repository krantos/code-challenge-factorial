describe('Test with mocked backend', () => {

  beforeEach('open the calculator', () => {
    cy.visit('http://qainterview.pythonanywhere.com/');
  })

  it('verify correct way to handle response', () => {
    cy.server();
    cy.route('POST', '**/factorial', 'fixture:result-1.json');

    cy.get('#number').type('3')
    cy.get('#getFactorial').click()

    cy.fixture('result-1').then(file => {

      cy.get('#resultDiv')
          .should('be.visible')
          .and('contain', `The factorial of 3 is: ${file.answer}`)
    })
    cy.screenshot();
  })
})