/// <reference types="cypress" />

describe('Sign in', () => {
  it('Navigate to the index page', () => {
    cy.visit('/');
  });

  it('Fill out sign in form', () => {
    cy.get('[data-cy="sign-in"]').click();
    cy.get('[data-cy="sign-in-email"]').type('test@user.com');
    cy.get('[data-cy="sign-in-password"]').type('password123');
    cy.get('[data-cy="sign-in-submit"]').click();
  });
});

export {};
