import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.username);
    }

    handleChange(event) {
      this.setState({
        username: event.target.value
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>
            {this.props.label}
          </label>
          <div className='row player-inputs'>
            <input
              type='text'
              id='username'
              className='input-light'
              placeholder='github username'
              autoComplete='off'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <button
              className='btn dark-btn'
              type='submit'
              disabled={!this.state.username}
            >
              Entrar Nessa
            </button>
          </div>
        </form>
      )
    }
  }
  
  PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  }

  PlayerInput.defaultProps = {
    onSubmit: () => {console.log('PlayerInput.defaultProps')},
    label: 'Player Input'
  }

  
  export default PlayerInput;