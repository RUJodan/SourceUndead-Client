import io from 'socket.io-client';

const socket = io('http://localhost:8080');

export const RESET_LOGIN_PAGE = 'RESET_LOGIN_PAGE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
function loginFailure(data) {
  return {
    type: LOGIN_FAILURE,
    data,
  };
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export default function login(credentials) {
  return async (dispatch) => {
    // dispact request
    dispatch(loginRequest());

    // emit socket api call
    socket.emit('login', credentials);

    // listen for response
    socket.on('login', (payload) => {
      if (payload.flag) {
        const error = {
          error: payload.msg,
        };

        // dispatch error
        dispatch(loginFailure(error));
      } else {
        // dispatch success
        dispatch(loginSuccess(payload));
      }
    });
  };
}
