import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Link } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Link href="/" color="black" underline="hover">
        Home
      </Link>
      <br />
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};
