import React from 'react';
import { mount } from '@cypress/react';
import Introduction from '../Introduction/Introduction'; 

describe('Introduction component', () => {
  it('renders the welcome message', () => {
    mount(<Introduction />);

    cy.contains('Welcome to the API Documentation Hub').should('be.visible');
  });

  it('displays the API descriptions', () => {
    mount(<Introduction />);

    cy.contains('The Unsplash API').should('be.visible');
    cy.contains('The Rick & Morty API').should('be.visible');
    cy.contains('Interact with both APIs seamlessly.').should('be.visible');
  });

  it('renders the documentation image', () => {
    mount(<Introduction />);

    cy.get('img').should('be.visible');
  });

  it('displays the correct image alt text', () => {
    mount(<Introduction />);

    cy.get('img').should('have.attr', 'alt', 'Documentation illustration');
  });
});
