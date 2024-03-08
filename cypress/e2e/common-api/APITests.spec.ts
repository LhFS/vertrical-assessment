import { method } from "cypress/types/bluebird";
import constants from "../../support/constants"

describe("GET Request", () => {
    it('GET user info', () => {
        cy.request('GET', constants.Endpoint).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
            expect(response.body).to.have.lengthOf(10);
        });
    });
});

describe("POST Request", () => {
    it('POST new information', () => {
       cy.request({method: 'POST', url: constants.Endpoint, body: {
            "name": "Peter",
            "email": "mrpeter@test.com"
        }}).then((response) =>{
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq("Peter")
        expect(response.body.email).to.eq("mrpeter@test.com")
    })
});
});

describe("PUT Request", () => {
    it('PUT new information', () => {
       cy.request({method: 'PUT', url: constants.PutEndpoint, body: {
            "name": "Alana",
            "email": "alana@newemail.com"
        }}).then((response) =>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Alana")
        expect(response.body.email).to.eq("alana@newemail.com")
    })
});
});

describe("Delete Request", () => {
    it('DELETE user information', () => {
       cy.request({method: 'DELETE', url: constants.DeleteEndpoint}).then((response) =>{
        expect(response.status).to.eq(200)
    })
});
});