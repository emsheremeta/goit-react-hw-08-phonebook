import { useAuth } from 'hooks/useAuth';
import { Box, Link } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box marginTop="10px">
      <Link href="/" color="black" underline="hover" fontSize="30px">
        Home
      </Link>
      {isLoggedIn && (
        <Link
          color="black"
          marginLeft="10px"
          underline="hover"
          fontSize="30px"
          href="/contacts"
        >
          Phonebook
        </Link>
      )}
    </Box>
  );
};
