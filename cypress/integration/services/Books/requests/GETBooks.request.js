/// <reference types="cypress" />

function allBooks() {
    return cy.request({
      method: 'GET',
      url: 'v1/Books',
      failOnStatusCode: false, 
    })
  }
  
export { allBooks };