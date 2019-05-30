import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../Actions/login';

const initialState = {
  message: '',
  errorClass: '',
  redirect: false,
};

export default function createAccount(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        message: 'Logging in...',
        errorClass: 'success',
        redirect: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        message: action.data.msg,
        errorClass: 'success',
        redirect: true,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        message: action.data.error,
        errorClass: 'error',
        redirect: false,
      });
    case 'RESET_LOGIN_PAGE':
      return initialState;
    default:
      return state;
  }
}
