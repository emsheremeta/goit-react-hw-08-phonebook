// import ContactFilter from './phonebook/ContactFilter';
import Form from './components/phonebook/Form';
import ContactList from './components/phonebook/ContactList';
import ContactFilter from './components/phonebook/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

function PhoneApp() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log('start');

  useEffect(() => {
    console.log('PA - FC');
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}
export default PhoneApp;
{
  /* <Form />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactFilter />
      <ContactList /> */
}
