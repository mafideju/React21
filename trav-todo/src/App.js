import React, { useEffect, useState } from 'react'
import AddTasks from './components/AddTasks/AddTasks';
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const newTasks = await response.json();
    return setTasks(newTasks);
  }

  const fetchTaskById = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const newTask = await response.json();
    return newTask;
  }

  useEffect(() => {
    fetchTasks();
  }, []);


  const addTask = async (task) => {
    console.log('task', task)

    const response = await fetch('http://localhost:5000/tasks', { 
      method: 'POST', 
      headers: { 'Content-type':'application/json' },
      body: JSON.stringify(task) 
    });

    const newTask = await response.json();
    console.log('newTask', newTask)
    setTasks([ ...tasks, newTask ]);
  }

  const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = async  (id) => {
    const toggleTask = await fetchTaskById(id);
    const updatedTask = { ...toggleTask, done: !toggleTask.done };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    });

    const newTask = await response.json();

    setTasks(tasks.map(task => task.id === id ? { ...task, done: newTask.done } : task));
  }

  return (
    <main className="container">
      <Header title="Task Tracker" show={show} showForm={() => setShow(!show)} />
      {show && <AddTasks addTask={addTask} />}
      <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} toggleReminder={toggleReminder} />
    </main>
  );
}

export default App;
