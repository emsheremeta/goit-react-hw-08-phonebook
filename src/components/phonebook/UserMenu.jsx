import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '10px',
        borderBottom: 2,
        borderColor: 'divider',
      }}
    >
      <Typography
        component="p"
        variant="h6"
        sx={{ minWidth: 300, display: 'flex' }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        type="button"
        sx={{
          backgroundColor: 'primary',
          color: 'white',
          height: '30px',
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
