import { CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_FAILURE } from '../Actions/createAccount';

const initialState = {
  message: '',
  errorClass: '',
};

export default function createAccount(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
      return Object.assign({}, state, {
        message: 'Validating account...',
        errorClass: 'success',
      });
    case CREATE_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        message: action.data.msg,
        errorClass: 'success',
      });
    case CREATE_ACCOUNT_FAILURE:
      return Object.assign({}, state, {
        message: action.data.error,
        errorClass: 'error',
      });
    case 'RESET_CREATE_ACCOUNT_PAGE':
      return initialState;
    default:
      return state;
  }
}
