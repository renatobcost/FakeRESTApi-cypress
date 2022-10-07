/// <reference types="cypress" />

function deleteAuthor(idAuthor) {
    return cy.request({
      method: 'DELETE',
      url: `v1/Authors/${idAuthor}`,
      failOnStatusCode: false
    })
  }
  
  export { deleteAuthor };