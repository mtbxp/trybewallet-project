import fetchApi from '../../API/fetchApi';

export const LOGIN = 'LOGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const GET_EXPENSES = 'GET_EXPENSES';

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

export const saveExpenses = (expenses, data) => ({
  type: GET_EXPENSES,
  expenses,
  data,
});
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  expenses,
});

export function getCurrencies() {
  return async (dispatch) => {
    try {
      const data = await fetchApi();
      const currencies = Object.keys(data);
      const filterCurrencies = currencies.filter((currencie) => currencie !== 'USDT');
      dispatch(fetchSuccess(filterCurrencies));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
}
export function getExpenses(state) {
  return async (dispatch) => {
    const data = await fetchApi();
    dispatch(saveExpenses(state, data));
  };
}
