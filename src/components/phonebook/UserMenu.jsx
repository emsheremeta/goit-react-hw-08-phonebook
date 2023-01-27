import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container component="div" maxWidth="l">
      <Box
        sx={{
          display: 'inline-flex',
          textAlign: 'center',
          marginRight: '30px',
        }}
      >
        <Typography component="p" variant="h6">
          Welcome, {user.name}
        </Typography>
        <Button
          variant="contained"
          type="button"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            marginLeft: '10px',
            height: '30px',
            marginTop: '15px',
            marginRight: '10px',
          }}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};
