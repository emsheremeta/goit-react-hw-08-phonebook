import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/phonebook/Layout';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

function PhoneApp() {
  const dispatch = useDispatch();
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
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Login />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<Contacts />}
            />
          }
        />
      </Route>
    </Routes>
  );
}
export default PhoneApp;
