Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Thaynara');
    cy.get('#lastName').type('Amaral');
    cy.get('#email').type('thayamarallobo@gmail.com');
    cy.get('#open-text-area').type('Teste basico cypress');
    cy.get('button[type="submit"]').click();
})