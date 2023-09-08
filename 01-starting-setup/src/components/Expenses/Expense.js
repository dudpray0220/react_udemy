import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

const Expense = (props) => {
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

  let expensesContent = <p>No Expenses here.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className={'expenses'}>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expense;
