/// <reference types="cypress" />

describe('Sign up', () => {
  it('Navigate to the index page', () => {
    cy.visit('/');
  });

  it('Fill out sign up form', () => {
    cy.intercept(
      {
        method: 'POST',
        url: '**/user/sign-up',
      },
      { fixture: 'access-token' }
    ).as('accessToken');
    cy.get('[data-cy="sign-up"]').click();
    cy.get('[data-cy="sign-up-email"]')
      .should('have.value', '')
      .type('test@user.com')
      .should('have.value', 'test@user.com');
    cy.get('[data-cy="sign-up-password"]')
      .should('have.value', '')
      .type('password123')
      .should('have.value', 'password123');
    cy.get('[data-cy="sign-up-confirm-password"]')
      .should('have.value', '')
      .type('password123')
      .should('have.value', 'password123');
    cy.get('[data-cy="sign-up-submit"]').click();
  });
});

export {};
