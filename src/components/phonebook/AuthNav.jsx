import { Link } from '@mui/material';
import Box from '@mui/material/Box';

export const AuthNav = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'inline-flex',
          textAlign: 'center',
          marginLeft: '15px',
          marginTop: '10px',
        }}
      >
        <Link
          href="/goit-react-hw-08-phonebook/register"
          color="black"
          sx={{ minWidth: 300 }}
          underline="hover"
          fontSize="30px"
        >
          Register
        </Link>

        <br />
        <Link
          href="/goit-react-hw-08-phonebook/login"
          color="black"
          underline="hover"
          fontSize="30px"
        >
          Log In
        </Link>
      </Box>
    </div>
  );
};
