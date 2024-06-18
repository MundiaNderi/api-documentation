import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UnsplashUse from '../Unsplash/UnsplashUse'; 

describe('UnsplashUse Component', () => {
  beforeEach(() => {
    mount(
      <Router>
        <UnsplashUse />
      </Router>
    );
  });

  it('renders Unsplash API Usage for Developers section', () => {
    cy.contains('h1', 'Unsplash API Usage for Developers').should('be.visible');
    cy.contains('p', 'To enjoy the benefits of Unsplash API as a Developer').should('be.visible');
    cy.contains('li', 'Create a developer account at Unsplash').should('be.visible');
  });

  it('renders Unsplash for Businesses section', () => {
    cy.contains('h1', 'Unsplash for Businesses').should('be.visible');
    cy.contains('p', 'Here are ways in which Unsplash can benefit your business').should('be.visible');
    cy.contains('li', 'Content Marketing').should('be.visible');
  });

  it('navigates to /unsplash when "View Unsplash Photos" button is clicked', () => {
    cy.contains('button', 'View Unsplash Photos').click();
    cy.url().should('include', '/unsplash');
  });
});
