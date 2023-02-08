import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { useAuth } from 'hooks/useAuth';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const PageHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Container maxWidth="m">
        <Box
          sx={{
            display: 'inline-flex',
            textAlign: 'center',
            marginLeft: '15px',
          }}
        >
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Box>
      </Container>
    </header>
  );
};
