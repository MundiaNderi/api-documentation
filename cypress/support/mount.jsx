// cypress/support/mount.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'cypress/react';

export const mountWithRouter = (component, initialEntries = ['/']) => {
  return mount(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};
