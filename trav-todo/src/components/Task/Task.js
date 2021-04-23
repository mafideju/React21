import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, handleDeleteTask, toggleReminder }) => (
    <>
        <div
            className={`task ${task.done ? 'reminder' : ''}`}
            onDoubleClick={() => toggleReminder(task.id)} 
        >
            <h3>{task.name} <FaTimes onClick={() => handleDeleteTask(task.id)} /></h3>
            <p>{task.done ? `Feita em ${task.createdAt}` : `Fazer até ${task.createdAt}`}</p>
        </div>
    </>
);

Task.defaultProps = {
    task: {
        done: false,
        id: 1,
        name: 'Task Tracker',
        createdAt: '01-01-2021'
    },
    handleDeleteTask: () => {},
    toggleReminder: () => {}
}

Task.propTypes = {
    task: PropTypes.shape({
        done: PropTypes.bool,
        id: PropTypes.number,
        name: PropTypes.string,
        createdAt: PropTypes.string,
    }).isRequired, 
    handleDeleteTask: PropTypes.func,
    toggleReminder: PropTypes.func,
}

export default Task;
