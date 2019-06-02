import React from 'react';
import { Link } from 'react-router-dom';
import { socketEmit } from '../Websocket';

function logout() {
  socketEmit('logout');

  // remove session
  window.sessionStorage.removeItem('token');

  // reload to apply token logout
  window.location.reload();
}

const MenuSideBar = () => (
  <div className="sidebar">
    <div className="title">
      SourceUndead
    </div>
    <ul className="nav">
      <li>
        <Link to="/" className="menu-option-text">
          <i className="menu-option fa fa-line-chart fa-2x" />
          &nbsp;Statistics
        </Link>
      </li>
      <li>
        <Link to="/lobby" className="menu-option-text">
          <i className="menu-option fa fa-desktop fa-2x" />
          &nbsp;Lobby
        </Link>
      </li>
      <li>
        <Link to="/createGame" className="menu-option-text">
          <i className="menu-option fa fa-gamepad fa-2x" />
          &nbsp;Create a Game
        </Link>
      </li>
      <li>
        <a href="https://github.com/RUJodan/">
          <i className="menu-option fa fa-github fa-2x" />
          &nbsp;Github
        </a>
      </li>
    </ul>
    <div className="logout">
      <button onClick={logout} type="button">
        <i className="menu-option fa fa-power-off fa-2x" />
        &nbsp;Logout
      </button>
    </div>
  </div>
);

export default MenuSideBar;
