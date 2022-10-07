/// <reference types="cypress" />

const payloadAddAuthor = require('../payloads/add-author.json')

function addAuthor() {
  return cy.request({
    method: 'POST',
    url: 'v1/Authors',
    failOnStatusCode: false,
    body: payloadAddAuthor
  })
}

export { addAuthor };