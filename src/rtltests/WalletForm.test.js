import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

it('Verifica se o "WalletForm" é renderizado', async () => {
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

  userEvent.type(valueInput, 1);
  userEvent.type(descriptionInput, 'teste');
  userEvent.selectOptions(tagInput, 'Transporte');
  userEvent.click(addExpense);

  const transporte = await screen.findByText('Transporte');
  const teste = await screen.findByText('teste');
  expect(transporte).toBeInTheDocument();
  const deleteBtn = await screen.findByTestId('delete-btn');
  expect(deleteBtn).toBeInTheDocument();
  userEvent.click(deleteBtn);
  expect(teste).not.toBeInTheDocument();
});
