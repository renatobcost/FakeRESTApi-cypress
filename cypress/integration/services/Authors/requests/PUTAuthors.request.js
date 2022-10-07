/// <reference types="cypress" />

const payloadChangeAuthor = require('../payloads/change-author.json')

function changeAuthor(idAuthor) {
  return cy.request({
    method: 'PUT',
    url: `v1/Authors/${idAuthor}`,
    headers: {
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: payloadChangeAuthor
  })
}

export { changeAuthor };