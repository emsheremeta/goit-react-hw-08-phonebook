import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { useAuth } from 'hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const PageHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="m">
          <Navigation />
          <br />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Container>
      </AppBar>
    </header>
  );
};
