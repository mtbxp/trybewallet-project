export const LOGIN = 'LOGIN';
export const loginInput = (email) => ({
  type: LOGIN,
  email,
});

export const WALLET = 'WALLET';
export const walletInput = () => ({
  type: WALLET,
});
