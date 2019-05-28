import API from '../API';

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

    // make api call
    const json = await API.login(credentials);

    if (json.flag) {
      const error = {
        error: json.msg,
      };

      // dispatch error
      dispatch(loginFailure(error));
    } else {
      // dispatch success
      dispatch(loginSuccess(json));
    }
  };
}
