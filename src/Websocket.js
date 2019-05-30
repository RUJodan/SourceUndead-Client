import io from 'socket.io-client';
import Store from './store';

// action handlers
import * as CreateAccountHandler from './Actions/createAccount';
import * as LoginHandler from './Actions/login';

// ws address
const initialToken = localStorage.getItem('token');
const WS_ADDRESS = 'http://localhost:8080';

// create the socket
const socket = io(WS_ADDRESS);

// if a token exists, validate and upgrade
if (initialToken) {
  socket.emit('authenticate', { token: initialToken });
}

socket.on('create-account', payload => Store.dispatch(CreateAccountHandler.wsCreateAccountResponse(payload)));
socket.on('login', payload => Store.dispatch(LoginHandler.wsLoginResponse(payload)));

function reconnectWithJWT() {
  const token = localStorage.getItem('token');

  // send authentication token
  socket.emit('authenticate', { token });
}

function socketEmit(address, payload) {
  socket.emit(address, payload);
}

export {
  reconnectWithJWT,
  socketEmit,
  socket,
};
