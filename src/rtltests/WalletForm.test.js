import { screen } from '@testing-library/react';
import React from 'react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

it('Verifica se o header foi renderizado', () => {
  renderWithRouterAndRedux(<Wallet />);
  const email = screen.getByTestId('email-field');
  const total = screen.getByTestId('total-field');
  const currency = screen.getByTestId('header-currency-field');
  expect(email).toBeInTheDocument();
  expect(total).toBeInTheDocument();
  expect(currency).toBeInTheDocument();
});

it('Verifica se o "WalletForm" é renderizado', () => {
  renderWithRouterAndRedux(<Wallet />);

  const valueInput = screen.getByTestId('value-input');
  const descriptionInput = screen.getByTestId('description-input');
  const currencyInput = screen.getByTestId('currency-input');
  const methodInput = screen.getByTestId('method-input');
  const tagInput = screen.getByTestId('tag-input');
  const addExpense = screen.getByRole('button', {
    name: 'Adicionar despesa' });

  expect(valueInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(currencyInput).toBeInTheDocument();
  expect(methodInput).toBeInTheDocument();
  expect(tagInput).toBeInTheDocument();
  expect(addExpense).toBeInTheDocument();
});
