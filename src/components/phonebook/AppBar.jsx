import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      <br />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};
