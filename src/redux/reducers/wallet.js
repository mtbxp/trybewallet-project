import { DELETE_EXPENSE, FETCH_SUCCESS, GET_EXPENSES } from '../actions/index';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      currencies: action.filterCurrencies,
    };
  case GET_EXPENSES:
    return { ...state,
      expenses:
      [...state.expenses, { ...action.expenses, exchangeRates: action.data }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default walletReducer;
