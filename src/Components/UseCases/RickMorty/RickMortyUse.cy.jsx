import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RickMortyUse from '../RickMorty/RickMortyUse';

describe('RickMortyUse Component', () => {
  beforeEach(() => {
    mount(
      <Router>
        <RickMortyUse />
      </Router>
    );
  });

  it('renders Rick and Morty API for developers section', () => {
    cy.contains('h1', 'Rick and Morty API for developers').should('be.visible');
    cy.contains('p', 'To enjoy the benefits of the Rick and Morty API as a developer').should('be.visible');
    cy.contains('li', 'Navigate to the Rick and Morty GraphQL documentation').should('be.visible');
  });

  it('renders Unlock Business Potential with the Rick and Morty API section', () => {
    cy.contains('h1', 'Unlock Business Potential with the Rick and Morty API').should('be.visible');
    cy.contains('p', 'The Rick and Morty API provides extensive data about the popular animated series. Here are some innovative business use cases:').should('be.visible');
    cy.contains('li', 'Fan Engagement: Develop interactive apps or websites').should('be.visible');
  });

  it('navigates to /rickandmorty when "View Rick and Morty" button is clicked', () => {
    cy.contains('button', 'View Rick and Morty').click();
    cy.url().should('include', '/rickandmorty');
  });

});
