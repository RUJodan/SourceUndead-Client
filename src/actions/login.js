import { reconnectWithJWT } from '../Websocket';

export const RESET_LOGIN_PAGE = 'RESET_LOGIN_PAGE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

function loginFailure(data) {
  return {
    type: LOGIN_FAILURE,
    data,
  };
}

function loginSuccess(data) {
  // store token on localhost
  window.localStorage.setItem('token', data.token);
  reconnectWithJWT();

  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

function wsLoginResponse(data) {
  return async (dispatch) => {
    if (data.flag) {
      const error = {
        error: data.msg,
      };

      // dispatch error
      dispatch(loginFailure(error));
    } else {
      // dispatch success
      dispatch(loginSuccess(data));
    }
  };
}

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  wsLoginResponse,
};
