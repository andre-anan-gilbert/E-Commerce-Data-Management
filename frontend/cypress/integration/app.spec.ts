/// <reference types="cypress" />

describe('Index Page', () => {
  it('Navigate to the index page', () => {
    // baseUrl is prefixed
    cy.visit('/');
  });
});

export {};
