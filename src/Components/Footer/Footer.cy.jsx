import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    mount(
      <Router>
        <Footer />
      </Router>
    );
  });

  it('renders links correctly', () => {
    cy.contains('DOCS HUB').should('have.attr', 'href', '/');
    cy.contains('UNSPLASH').should('have.attr', 'href', '/unsplash');
    cy.contains('RICK AND MORTY').should('have.attr', 'href', '/rickandmorty');
  });

  it('renders social media icons', () => {
    cy.get('img[alt="LinkedIn logo"]').should('exist');
    cy.get('img[alt="Twitter logo"]').should('exist');
    cy.get('img[alt="Github logo"]').should('exist');
  });

  it('displays copyright text', () => {
    cy.contains('© 2024 Docs Hub. All rights reserved.').should('be.visible');
  });
});
