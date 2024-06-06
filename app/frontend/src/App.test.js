import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product management header', async () => {
  render(<App />);
  const headerElement = await screen.findByText(/Product Management/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders product form', async () => {
  render(<App />);
  const nameLabel = await screen.findByLabelText(/Product Name/i);
  const priceLabel = await screen.findByLabelText(/Product Price/i);
  expect(nameLabel).toBeInTheDocument();
  expect(priceLabel).toBeInTheDocument();
});

test('renders product list', async () => {
  render(<App />);
  const listHeader = await screen.findByText(/Product List/i);
  expect(listHeader).toBeInTheDocument();
});
