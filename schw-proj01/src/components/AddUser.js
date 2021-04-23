import React, { useState } from 'react';
import Card from '../elements/Card';

export default function AddUser({ sendUserDataHandler }) {
  const [form, setForm] = useState({
    username: '',
    age: 0,
  });

  const addUserHandler = (e) => {
    e.preventDefault();
    sendUserDataHandler({
      username: form.username,
      age: form.age,
    });
    setForm({ username: '', age: 0 });
  };

  const setUserData = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">
          {' '}
          User
          <input type="text" value={form.username} name="username" onChange={setUserData} />
        </label>
        <label htmlFor="username">
          {' '}
          Idade
          <input type="number" value={form.age} name="age" onChange={setUserData} min="0" />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </Card>
  );
}
