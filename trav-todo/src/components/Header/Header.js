import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({ title, showForm, show }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={!show ? 'green' : 'red'} text={!show ? 'Nova Tarefa' : 'Fechar'} handletask={showForm} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
