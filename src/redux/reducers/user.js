import { LOGIN } from '../actions/index';

const INITAL_STATE = {
  email: 'Você não está logado',
};

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
