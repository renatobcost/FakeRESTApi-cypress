/// <reference types="cypress" />

function deleteBook(idBook) {
    return cy.request({
      method: 'DELETE',
      url: `v1/Books/${idBook}`,
      failOnStatusCode: false
    })
  }
  
  export { deleteBook };