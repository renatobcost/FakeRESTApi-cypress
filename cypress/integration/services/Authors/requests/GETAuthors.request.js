/// <reference types="cypress" />

function allAuthors() {
    return cy.request({
      method: 'GET',
      url: 'v1/Authors',
      failOnStatusCode: false,
    })
  }
  
export { allAuthors };