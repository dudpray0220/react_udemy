import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // let filterInfoText = '2019, 2021 & 2022';
  //
  // if (filteredYear === '2019') {
  //   filterInfoText = '2020, 2021 & 2022';
  // } else if (filteredYear === '2021') {
  //   filterInfoText = '2019, 2020 & 2022';
  // } else if (filteredYear === '2022') {
  //   filterInfoText = '2019, 2020 & 2021';
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={'expenses'}>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;