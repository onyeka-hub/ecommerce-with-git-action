import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product management header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Product Management/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders product form', () => {
  render(<App />);
  const nameLabel = screen.getByLabelText(/Product Name/i);
  const priceLabel = screen.getByLabelText(/Product Price/i);
  expect(nameLabel).toBeInTheDocument();
  expect(priceLabel).toBeInTheDocument();
});

test('renders product list', () => {
  render(<App />);
  const listHeader = screen.getByText(/Product List/i);
  expect(listHeader).toBeInTheDocument();
});
