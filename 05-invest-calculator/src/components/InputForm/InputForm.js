import React, { useState } from 'react';
import styles from './InputForm.module.css';

const InputForm = (props) => {
  const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  // const changeInputHandler = (event) => {
  //   const { id, value } = event.target; // 구조 분해 할당
  //   setFormData((prevState) => {
  //     return { ...prevState, [id]: value }; //
  //   });
  // };

  const changeInputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value }; // 객체 key 에 -이 들어가서 [] 감싸줌.
    });
  };

  const clickResetHandler = () => {
    setUserInput(initialUserInput);
  };

  const clickSubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  return (
    <form className={styles.form} onSubmit={clickSubmitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
            onChange={(event) => {
              changeInputHandler('current-savings', event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
            onChange={(event) => {
              changeInputHandler('yearly-contribution', event.target.value);
            }}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
            onChange={(event) => {
              changeInputHandler('expected-return', event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput['duration']}
            onChange={(event) => {
              changeInputHandler('duration', event.target.value);
            }}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={clickResetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
