import { LOGIN } from '../actions/index';

const INITAL_STATE = {};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
