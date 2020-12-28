import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <button>{this.props.location}</button>
        )
    }
}

export default Button;