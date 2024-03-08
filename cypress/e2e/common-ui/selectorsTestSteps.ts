import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

When("I click on Blue button", () => {
    cy.get('a.button').first().click();
    }); 

When("I click on Red button", () => {
    cy.get('a.button.alert').click();
    }); 

When("I click on Green button", () => {
    cy.get('a.button.success').click();
    });

When("I click on the edit and delete buttons and the URL changes accordingly", () => {
    cy.get('tbody tr').each(($row, index) => {
        cy.wrap($row).find('a[href="#edit"]').click().then(() => {
          cy.url().should('eq', `https://the-internet.herokuapp.com/challenging_dom#edit`);
        });
        cy.wrap($row).find('a[href="#delete"]').click().then(() => {
          cy.url().should('eq', `https://the-internet.herokuapp.com/challenging_dom#delete`);
        });
      });
})
