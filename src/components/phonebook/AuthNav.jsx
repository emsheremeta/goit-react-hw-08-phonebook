import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <br />
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
