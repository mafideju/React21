import React, { Component } from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';


class Battle extends Component {
  render() {
    return (
      <>
        <Instructions />
        <PlayerInput />
      </>
    );
  };
}

export default Battle;