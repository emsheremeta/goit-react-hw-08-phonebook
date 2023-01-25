import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './phonebook/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Toaster />
    </div>
  );
};
