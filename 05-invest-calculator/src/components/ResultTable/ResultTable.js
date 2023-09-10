import React from 'react';
import styles from './ResultTable.module.css';

const ResultTable = (props) => {
  if (props.result.length === 0) {
    return <p>No result</p>;
  }

  let resultData = props.result.map((year) => {
    return (
      <tr key={year.year}>
        <td>{year.year}</td>
        <td>{year.savingsEndOfYear}</td>
        <td>{year.yearlyInterest}</td>
        <td>{year.yearlyContribution}</td>
        <td>{year.yearlyContribution + year.yearlyInterest}</td>
      </tr>
    );
  });

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{resultData}</tbody>
    </table>
  );
};

export default ResultTable;
