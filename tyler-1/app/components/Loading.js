import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: '5%',
    textAlign: 'center',
  }
}

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.text,
    }
  }

  componentDidMount () {
    this.interval = window.setInterval(() => {
      this.state.content === this.props.text + '...'
        ? this.setState({ content: this.props.text })
        : this.setState(({ content }) => ({ content: content + '.' }))
    }, this.props.speed);
  }

  componentWillUnmount () {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.content}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Carregaaaaaaando',
  speed: 300
}

export default Loading;