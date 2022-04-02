/// <reference types="cypress" />

describe('Index Page', () => {
  it('Navigate to the index page', () => {
    cy.visit('/');
  });
});

export {};
