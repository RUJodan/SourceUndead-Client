import React from 'react';
import { withRouter } from 'react-router';

class Lobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      errorClass: '',
    };
  }

  render() {
    const { error, errorClass } = this.state;
    return (
      <div className="content">
        <fieldset>
          <legend>Pick a game</legend>
          <div className={errorClass}>{error}</div>
          <div className="twelve columns" id="lobby">
            testing
          </div>
        </fieldset>
      </div>
    );
  }
}

export default withRouter(Lobby);
