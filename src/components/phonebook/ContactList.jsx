import React from 'react';
import Contact from './Contact';
import styles from './Phonebook.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log('filter', filter);

  const getFilteredContacts = () => {
    console.log(contacts);
    return contacts.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div className={styles.contactWrapper}>
      <h2 className={styles.contactText}>Contacts</h2>
      {contacts.length !== 0 &&
        getFilteredContacts().map(contact => {
          return <Contact key={contact.id} contact={contact}></Contact>;
        })}
    </div>
  );
}

export default ContactList;
