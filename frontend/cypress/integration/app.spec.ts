/// <reference types="cypress" />

describe('Navigation', () => {
  it('Navigate to the index page', () => {
    cy.visit('/');
  });
});

export {};
