import React from 'react';
import styles from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import Input from '@mui/material/Input';

function ContactFilter() {
  const dispatch = useDispatch();

  const onChange = event => {
    const filter = event.currentTarget.value;
    dispatch(filterChange(filter));
  };
  return (
    <div>
      <label className={styles.contactLabel}>Find contacts by name:</label>
      <Input
        className={styles.contactsInput}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </div>
  );
}

export default ContactFilter;
