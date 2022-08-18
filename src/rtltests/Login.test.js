import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

test('se carrega a pagina de login', () => {
  renderWithRouterAndRedux(<App />);

  const loginText = screen.getByRole('heading', {
    name: 'Login' });
  expect(loginText).toBeInTheDocument();
  expect(screen.getByTestId('email-input')).toBeInTheDocument();
  expect(screen.getByTestId('password-input')).toBeInTheDocument();
  const enterButton = screen.getByRole('button', { name: 'Entrar' });
  expect(enterButton).toBeInTheDocument();
});

test('se o botao "Entrar" está desabilitado por default', () => {
  renderWithRouterAndRedux(<App />);
  const EnterButton = screen.getByRole('button', { name: 'Entrar' });
  expect(EnterButton).toBeDisabled();
});

test('se o botao "Entrar" é habilitado ao preencher os requisitos', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const email = screen.getByTestId('email-input');
  const password = screen.getByTestId('password-input');
  const enterButton = screen.getByRole('button', { name: 'Entrar' });

  userEvent.type(email, 'trybe@trybe.com');
  userEvent.type(password, '123456');

  expect(enterButton).not.toBeDisabled();
  userEvent.click(enterButton);
  const { pathname } = history.location;
  expect(pathname).toBe('/carteira');
});
