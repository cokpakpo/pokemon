import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<MemoryRouter>
         <App />
    </MemoryRouter>);
  const linkElement = screen.getByText(/Pokemon Universe/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navigation component', () => {
  render(<MemoryRouter>
         <App />
    </MemoryRouter>);
  const linkElement = screen.getByText(/My Pokemon List/i);
  expect(linkElement).toBeInTheDocument();
});
