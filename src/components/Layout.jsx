import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { PageHeader } from './phonebook/AppBar';
import Container from '@mui/material/Container';

export const Layout = () => {
  return (
    <Container maxWidth="sm">
      <PageHeader />
      <Outlet />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Container>
  );
};
