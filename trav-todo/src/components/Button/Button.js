import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, handletask }) => {    
    return (
        <button 
            onClick={handletask}
            style={{ backgroundColor: color }}
            className="btn"
        >
            {text}
        </button>
    )
};

Button.defaultProps = {
    text: 'Task Tracker',
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button;
