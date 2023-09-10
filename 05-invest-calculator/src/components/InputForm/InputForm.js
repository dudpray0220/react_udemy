import React, { useState } from 'react';
import styles from './InputForm.module.css';

const InputForm = (props) => {
  const [formData, setFormData] = useState({
    'current-savings': '',
    'yearly-contribution': '',
    'expected-return': '',
    duration: '',
  });

  const changeInputHandler = (event) => {
    const { id, value } = event.target; // 구조 분해 할당
    setFormData((prevState) => {
      return { ...prevState, [id]: value }; // 객체 key에 -이 들어가서 [] 감싸줌.
    });
  };

  const clickResetHandler = () => {
    setFormData({
      'current-savings': '',
      'yearly-contribution': '',
      'expected-return': '',
      duration: '',
    });
  };

  const clickSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitData(formData);
  };

  return (
    <form className={styles.form} onSubmit={clickSubmitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formData['current-savings']}
            onChange={changeInputHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formData['yearly-contribution']}
            onChange={changeInputHandler}
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
            value={formData['expected-return']}
            onChange={changeInputHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData.duration}
            onChange={changeInputHandler}
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
