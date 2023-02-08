import { useAuth } from 'hooks/useAuth';
import { Box, Link } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return <Box marginTop="10px"></Box>;
};
