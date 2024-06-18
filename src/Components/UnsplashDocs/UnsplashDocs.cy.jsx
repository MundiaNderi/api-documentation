import React from 'react';
import { mount } from '@cypress/react';
import UnsplashDocs from './UnsplashDocs';

describe('UnsplashDocs Component', () => {
  it('renders and fetches initial photos', () => {
    mount(<UnsplashDocs />);

    // Check if the title is rendered
    cy.contains('h1', 'Unsplash API Example').should('be.visible');

    // Check if some photos are rendered
    cy.get('.search-result').find('img').should('have.length.greaterThan', 0);

    // Check if the "Show more" button is present
    cy.contains('button', 'Show more').should('be.visible');
  });

  it('searches for photos based on keyword', () => {
    mount(<UnsplashDocs />);

    // Type a keyword in the search input
    cy.get('#search-box').type('dogs');

    // Submit the form
    cy.get('#search-form').submit();

    // Check if the search result updates with photos related to 'dogs'
    cy.get('.search-result').find('img').should('have.length.greaterThan', 0);

    // Check if the keyword is reflected in the input field
    cy.get('#search-box').should('have.value', 'dogs');
  });

  it('loads more photos on "Show more" click', () => {
    mount(<UnsplashDocs />);

    // Store the initial number of photos
    cy.get('.search-result img').then(photos => {
      const initialPhotoCount = photos.length;

      // Click the "Show more" button
      cy.contains('button', 'Show more').click();

      // Wait for more photos to load
      cy.get('.search-result img').should('have.length.greaterThan', initialPhotoCount);
    });
  });
});
