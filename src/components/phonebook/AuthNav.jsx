import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Link href="/register" color="black" underline="hover">
        Register
      </Link>

      <br />
      <Link href="/login" color="black" underline="hover">
        Log In
      </Link>
    </div>
  );
};
