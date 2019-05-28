import API from '../API';

export const RESET_CREATE_ACCOUNT_PAGE = 'RESET_CREATE_ACCOUNT_PAGE';

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
function requestAccount() {
  return {
    type: CREATE_ACCOUNT_REQUEST,
  };
}

export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';
function createAccountFailed(data) {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    data,
  };
}

export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
function createAccountSuccess(data) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    data,
  };
}

export default function createAccount(credentials) {
  return async (dispatch) => {
    // dispact request
    dispatch(requestAccount());

    // make api call
    const json = await API.createAccount(credentials);

    if (json.flag) {
      const error = {
        error: json.msg,
      };

      // dispatch error
      dispatch(createAccountFailed(error));
    } else {
      // dispatch success
      dispatch(createAccountSuccess(json));
    }
  };
}
