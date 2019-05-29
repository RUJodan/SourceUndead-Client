export const RESET_CREATE_ACCOUNT_PAGE = 'RESET_CREATE_ACCOUNT_PAGE';
export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';

function requestAccount() {
  return {
    type: CREATE_ACCOUNT_REQUEST,
  };
}

function createAccountFailed(data) {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    data,
  };
}

function createAccountSuccess(data) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    data,
  };
}

function wsCreateAccountResponse(data) {
  return async (dispatch) => {
    if (data.flag) {
      const error = {
        error: data.msg,
      };

      // dispatch error
      dispatch(createAccountFailed(error));
    } else {
      // dispatch success
      dispatch(createAccountSuccess(data));
    }
  };
}

export {
  requestAccount,
  createAccountFailed,
  createAccountSuccess,
  wsCreateAccountResponse,
};
