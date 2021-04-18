import React from 'react';

// .expense-date {
//     display: flex;
//     flex-direction: column;
//     width: 5.5rem;
//     height: 5.5rem;
//     border: 1px solid #ececec;
//     background-color: #2a2a2a;
//     color: white;
//     border-radius: 12px;
//     align-items: center;
//     justify-content: center;
//   }

//   .expense-date__month {
//     font-size: 0.75rem;
//     font-weight: bold;
//   }

//   .expense-date__year {
//     font-size: 0.75rem;
//   }

//   .expense-date__day {
//     font-size: 1.5rem;
//     font-weight: bold;
//   }

export default function ExpenseDate({ expenseDate }) {
  const day = expenseDate.toLocaleString('pt-BR', { day: '2-digit' });
  const month = expenseDate.toLocaleString('pt-BR', { month: 'long' });
  const year = expenseDate.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
