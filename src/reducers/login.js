import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../Actions/login';

const initialState = {
  message: '',
  errorClass: '',
};

export default function createAccount(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        message: 'Logging in...',
        errorClass: 'success',
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        message: action.data.msg,
        errorClass: 'success',
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        message: action.data.error,
        errorClass: 'error',
      });
    case 'RESET_LOGIN_PAGE':
      return initialState;
    default:
      return state;
  }
}
