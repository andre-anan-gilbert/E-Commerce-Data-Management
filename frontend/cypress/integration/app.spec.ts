/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the index page', () => {
    cy.visit('/');
  });
});

export {};
