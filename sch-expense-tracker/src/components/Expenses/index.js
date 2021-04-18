import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem';
import ExpensesFilter from '../ExpensesFilter';

// .expenses {
//     padding: 1rem;
//     background-color: rgb(31, 31, 31);
//     margin: 2rem auto;
//     width: 50rem;
//     max-width: 95%;
//     border-radius: 12px;
//     box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
//   }

export default function Expenses({ expenses }) {
  const [year, setYear] = useState('2021');

  const filterExpenses = (data) => {
    setYear(data);
    console.log('Expenses >>>> filterExpenses =>', data);
  };

  return (
    <div>
      <div>
        <ExpensesFilter filterExpenses={filterExpenses} selectedYear={year} />
      </div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseDate={expense.date}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
        />
      ))}
    </div>
  );
}
