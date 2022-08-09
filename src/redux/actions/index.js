export const LOGIN = 'LOGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const loginInput = (email) => ({
  type: LOGIN,
  email,
});

export const fetchSuccess = (filterCurrencies) => ({
  type: FETCH_SUCCESS,
  filterCurrencies,
});

export const fetchFail = (error) => ({
  type: FETCH_FAIL,
  error,
});

export function getCurrencies() {
  return async (dispacth) => {
    try {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const data = await response.json();
      const currencies = Object.keys(data);
      const filterCurrencies = currencies.filter((currencie) => currencie !== 'USDT');
      dispacth(fetchSuccess(filterCurrencies));
    } catch (error) {
      dispacth(fetchFail(error));
    }
  };
}
