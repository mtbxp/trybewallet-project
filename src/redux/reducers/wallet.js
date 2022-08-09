import { FETCH_SUCCESS } from '../actions/index';

const INITAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      currencies: action.filterCurrencies,
    };
  default:
    return state;
  }
};

export default walletReducer;
