/// <reference types="cypress" />

describe('Sign in', () => {
  it('Navigate to the index page', () => {
    cy.visit('/');
  });

  it('Fill out sign in form', () => {
    cy.intercept(
      {
        method: 'POST',
        url: '**/user/sign-in',
      },
      { fixture: 'access-token' }
    ).as('accessToken');

    cy.get('[data-cy="sign-in"]').click();
    cy.get('[data-cy="sign-in-email"]')
      .should('have.value', '')
      .type('test@user.com')
      .should('have.value', 'test@user.com');
    cy.get('[data-cy="sign-in-password"]')
      .should('have.value', '')
      .type('password123')
      .should('have.value', 'password123');
    cy.get('[data-cy="sign-in-submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/home');
  });
});

export {};
