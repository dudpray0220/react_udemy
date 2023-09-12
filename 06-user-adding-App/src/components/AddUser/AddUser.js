import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // 유효성 검사 -> 에러 모달 띄움
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid input value.',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    console.log(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <>
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
          <input id={'username'} type={'text'} ref={nameInputRef} />

          <label htmlFor={'age'}>Age (Years)</label>
          <input id={'age'} type={'number'} ref={ageInputRef} />

          <Button type={'submit'}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
