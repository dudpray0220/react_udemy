import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(null);

  const changeHandler = (event) => {};

  return (
    <Card>
      <form className={classes.input}>
        <label id={'userName'}>Username</label>
        <input id={'userName'} type={'text'} onChange={changeHandler} />

        <label id={'userAge'}>Age (Years)</label>
        <input id={'userAge'} type={'text'} onChange={changeHandler} />

        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
