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
  const [year, setYear] = useState('');

  const filterExpenses = (data) => {
    setYear(data);
  };

  const filteredExpenses = expenses.filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === year,
  );

  // if (filteredExpenses.lenght === 0) {
  //   return <p>Não há despesas para exibir para o ano de ${year}.</p>;
  // }

  return (
    <div>
      <div>
        <ExpensesFilter filterExpenses={filterExpenses} selectedYear={year} />
      </div>
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expenseDate={expense.date}
            expenseTitle={expense.title}
            expenseAmount={expense.amount}
          />
        ))
      ) : (
        <p>Não há despesas para exibir para o ano de ${year}.</p>
      )}
    </div>
  );
}
