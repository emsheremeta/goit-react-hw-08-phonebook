import ContactFilter from 'components/phonebook/ContactFilter';
import ContactList from 'components/phonebook/ContactList';
import { useDispatch } from 'react-redux';
import Form from 'components/phonebook/Form';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <title>Your Contacts</title>
      <Form />
      <div>{isLoading && <b>Request in progress...</b>}</div>
      <ContactFilter />
      <ContactList />
    </div>
  );
}
