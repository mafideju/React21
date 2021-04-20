import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';

const expensesMock = [
  {
    id: 1234,
    title: 'Supermercado e iFood',
    amount: 321.54,
    date: new Date(2021, 3, 23),
  },
  {
    id: 2234,
    title: 'Bar e Esfiha do Ciço',
    amount: 31.54,
    date: new Date(2021, 2, 30),
  },
  {
    id: 3234,
    title: 'Contas de Consumo',
    amount: 387.54,
    date: new Date(2021, 0, 1),
  },
  {
    id: 4234,
    title: 'Aluguel do Mes',
    amount: 1544.26,
    date: new Date(2021, 3, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesMock);

  const onSubmitAddExpenseHandler = (expenseFormData) => {
    const newExpense = {
      ...expenseFormData,
      id: Math.random() * 1000,
    };
    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  return (
    <div style={{ padding: '32px', backgroundColor: '#eeefff' }}>
      <ExpenseForm onSubmitAddExpenseHandler={onSubmitAddExpenseHandler} />
      <br />
      <hr />
      <br />
      <Expenses expenses={expenses} />;
    </div>
  );
}

export default App;
