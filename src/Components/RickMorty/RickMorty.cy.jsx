import React from 'react';
import { mount } from '@cypress/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import RickMorty from '../RickMorty/RickMorty';
//import Characters from '../../../cypress/fixtures/characters.json'

// Define a mock GraphQL endpoint URL
const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';

// Mock the Apollo Client setup for testing
const createMockClient = () => {
  return new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
};

describe('RickMorty Component', () => {
  beforeEach(() => {
    // Mock the GraphQL request with Cypress intercept
    cy.intercept('POST', GRAPHQL_URL, (req) => {
      req.reply((res) => {
        res.send({
          fixture: 'characters.json',
        });
      });
    });

    // Mount the component with ApolloProvider and Router
    mount(
      <ApolloProvider client={createMockClient()}>
        <Router>
          <RickMorty />
        </Router>
      </ApolloProvider>
    );
  });

  it('renders and fetches initial characters', () => {
    // Check if the title is rendered
    cy.contains('h1', 'Rick & Morty API Example').should('be.visible');

    // Check if some characters are rendered
    cy.get('.search-result').find('img').should('have.length.greaterThan', 0);

    // Check if the "Show more" button is present
    cy.contains('button', 'Show more').should('be.visible');
  });

  it('searches for characters based on keyword', () => {
    // Type a keyword in the search input
    cy.get('#search-box').type('Rick');

    // Submit the form
    cy.get('#search-form').submit();

    // Check if the search result updates with characters related to 'Rick'
    cy.get('.search-result').find('img').should('have.length.greaterThan', 0);

    // Check if the keyword is reflected in the input field
    cy.get('#search-box').should('have.value', 'Rick');
  });

  it('loads more characters on "Show more" click', () => {
    // Store the initial number of characters
    cy.get('.search-result img').then((characters) => {
      const initialCharacterCount = characters.length;

      // Click the "Show more" button
      cy.contains('button', 'Show more').click();

      // Wait for more characters to load
      cy.get('.search-result img').should('have.length.greaterThan', initialCharacterCount);
    });
  });
});
