import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  const setNameHandler = (event) => setUserName(event.target.value);
  const setAgeHandler = (event) => setUserAge(event.target.value);
  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // 유효성 검사 -> 에러 모달 띄움
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid input value.',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0).',
      });
      return;
    }
    props.onAddUser(userName, userAge);

    setUserName('');
    setUserAge('');
    console.log(userName, userAge);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className={classes.input} onSubmit={submitHandler}>
          <label htmlFor={'username'}>Username</label>
          <input
            id={'username'}
            type={'text'}
            value={userName}
            onChange={setNameHandler}
          />

          <label htmlFor={'age'}>Age (Years)</label>
          <input
            id={'age'}
            type={'number'}
            value={userAge}
            onChange={setAgeHandler}
          />

          <Button type={'submit'}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
