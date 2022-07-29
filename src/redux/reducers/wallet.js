import { WALLET } from '../actions/index';

const INITAL_STATE = {};

const walletReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
  default:
    return state;
  }
};

export default walletReducer;
