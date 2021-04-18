import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Supermercado e iFood',
      amount: 321.54,
      date: new Date(2021, 3, 23),
    },
    {
      id: 2,
      title: 'Bar e Esfiha do Ciço',
      amount: 31.54,
      date: new Date(2021, 2, 30),
    },
    {
      id: 3,
      title: 'Contas de Consumo',
      amount: 387.54,
      date: new Date(2021, 0, 1),
    },
    {
      id: 4,
      title: 'Aluguel do Mes',
      amount: 1544.26,
      date: new Date(2021, 3, 19),
    },
  ];

  const onSubmitFormHandler = (objectData) => {
    const formData = {
      ...objectData,
      id: Math.random().toString(),
    };
    console.log('APP -- formData ==========', formData);
  };

  return (
    <div style={{ padding: '32px', backgroundColor: '#eeefff' }}>
      <ExpenseForm onSubmitFormHandler={onSubmitFormHandler} />
      <br />
      <hr />
      <br />
      <Expenses expenses={expenses} />;
    </div>
  );
}

export default App;
