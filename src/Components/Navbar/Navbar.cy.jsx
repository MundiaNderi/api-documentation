import React from 'react';
import Navbar from './Navbar'; 
import { mountWithRouter } from '../../../cypress/support/mount';

describe('<Navbar />', () => {
  it('renders', () => {
    mountWithRouter(<Navbar />);
  });

  it('should display the DOCS HUB link', () => {
    mountWithRouter(<Navbar />);
    cy.contains('DOCS HUB').should('be.visible');
  });

  it('should navigate to the Unsplash page', () => {
    mountWithRouter(<Navbar />);
    cy.contains('UNSPLASH').should('be.visible');
  })

  it('should navigate to the Rick and Morty page', () => {
    mountWithRouter(<Navbar />)
    cy.contains('RICK AND MORTY').should('be.visible')
  })

  it('should open the mobile menu when the hamburger is clicked', () => {
    mountWithRouter(<Navbar />);
    cy.get('.hamburger-react').click();
    cy.get('.absolute').should('be.visible'); 
    cy.contains('UNSPLASH').should('be.visible');
    cy.contains('RICK & MORTY').should('be.visible');
  });
});
