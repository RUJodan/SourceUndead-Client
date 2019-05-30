import React from 'react';
import { Link } from 'react-router-dom';

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
      <li>
        <Link to="/logout">
          <i className="menu-option fa fa-power-off fa-2x" />
          &nbsp;Logout
        </Link>
      </li>
    </ul>
  </div>
);

export default MenuSideBar;
