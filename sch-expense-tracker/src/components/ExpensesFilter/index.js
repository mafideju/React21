import React from 'react';

export default function ExpensesFilter({ filterExpenses, selectedYear }) {
  const handleYear = (e) => {
    filterExpenses(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="filter">Filter by year</label>
        <select value={selectedYear} onChange={handleYear}>
          <option>Escolha..</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
