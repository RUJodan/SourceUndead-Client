import io from 'socket.io-client';

const socket = io('http://localhost:8080');

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

    // make socket api call
    socket.emit('create-account', credentials);

    // listen for response
    socket.on('create-account', (payload) => {
      if (payload.flag) {
        const error = {
          error: payload.msg,
        };

        // dispatch error
        dispatch(createAccountFailed(error));
      } else {
        // dispatch success
        dispatch(createAccountSuccess(payload));
      }
    });
  };
}
