import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { Layout } from './Layout';
import { List } from './List';

test('renders button', () => {
  render(<MemoryRouter>
         <Button handleClick={() => {} } name="test button" color="green"/>
    </MemoryRouter>);
  const linkElement = screen.getByText(/test button/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders layout component', () => {
  render(<MemoryRouter>
         <Layout>
            <List />
         </Layout>
    </MemoryRouter>);
  const linkElement = screen.getByText(/made by/i);
  expect(linkElement).toBeInTheDocument();
});

export {}