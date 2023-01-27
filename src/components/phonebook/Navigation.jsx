import { useAuth } from 'hooks/useAuth';
import { Box, Link } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box marginTop="10px">
      <Link
        href="/goit-react-hw-08-phonebook/"
        color="black"
        underline="hover"
        fontSize="30px"
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          color="black"
          marginLeft="10px"
          underline="hover"
          fontSize="30px"
          href="/goit-react-hw-08-phonebook/contacts"
        >
          Phonebook
        </Link>
      )}
    </Box>
  );
};
