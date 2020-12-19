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
          .then((result) => {
            const pElement = result.get(0);
            const text = pElement.innerText;
            const number = text.replace('The factorial of 3 is: ', '');
            expect(number).be.a('number');
          });
    })
    cy.screenshot();
  })
})