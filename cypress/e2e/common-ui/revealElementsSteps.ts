import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

When("I have accessed the application {}", (url) => {
    const urlString = String(url);
    cy.intercept(urlString).as("openWebSite");
    cy.visit(urlString);
    cy.wait("@openWebSite").its("response.statusCode").should("eq", 200);
});

When("I click on Start button", () => {
    cy.get("#start").contains('Start').click();
    }); 

Then("the text: {} should be revealed", (text) => {
    cy.get("#finish", {timeout: 10000}).contains('Hello World!').should('have.text', text);
    }); 

