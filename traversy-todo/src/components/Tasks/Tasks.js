import React from 'react';
import Task from '../Task/Task';

const Tasks = ({ tasks, handleDeleteTask, toggleReminder }) => (
    <ul>
        {tasks?.map(task => (
            <Task 
                key={(Math.random() * Math.random()) / 100}
                id={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                toggleReminder={toggleReminder}
            />
        ))}
    </ul>
);

export default Tasks;
