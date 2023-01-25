import React from 'react';
import styles from './Phonebook.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const { id, name, number } = contact;
  const onDelete = id => {
    dispatch(deleteContact(id));
    console.log(id);
  };

  return (
    <li className={styles.contactList} id={id}>
      {name}: {number}
      <button className={styles.buttonContact} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
