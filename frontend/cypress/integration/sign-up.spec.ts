/// <reference types="cypress" />

describe('Sign up', () => {
  it('Navigate to the index page', () => {
    cy.visit('/');
  });

  it('Fill out sign up form', () => {
    cy.get('[data-cy="sign-up"]').click();
    cy.get('[data-cy="sign-up-email"]').type('test@user.com');
    cy.get('[data-cy="sign-up-password"]').type('password123');
    cy.get('[data-cy="sign-up-confirm-password"]').type('password123');
    cy.get('[data-cy="sign-up-submit"]').click();
  });
});

export {};
