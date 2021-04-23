import React, { useState } from 'react';

export default function ExpenseForm({ onSubmitAddExpenseHandler }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const submitExpenseHandler = (e) => {
    e.preventDefault();
    onSubmitAddExpenseHandler({
      title: form.title,
      amount: form.amount,
      date: new Date(form.date),
    });
    setForm({ title: '', amount: '', date: '' });
  };

  const formChangehandler = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={submitExpenseHandler}>
      <div>
        <div>
          <label htmlFor="title">
            Titulo{' '}
            <input
              type="text"
              value={form.title}
              onChange={formChangehandler}
              name="title"
              minLength="3"
            />
          </label>
        </div>
        <div>
          <label htmlFor="amount">
            Quantia{' '}
            <input
              type="number"
              value={form.amount}
              onChange={formChangehandler}
              name="amount"
              min="0.01"
              step="0.01"
            />
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Data{' '}
            <input
              type="date"
              value={form.date}
              onChange={formChangehandler}
              name="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </label>
        </div>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
