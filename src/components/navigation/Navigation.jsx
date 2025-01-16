import useAuth from 'hooks/useAuth';
import { HeaderLink } from './NavigationStyles';
import UserMenu from 'components/userMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && (
        <>
          <HeaderLink to="/register">Sign Up</HeaderLink>
          <HeaderLink to="/login">Sign In</HeaderLink>
        </>
      )}
    </nav>
  );
};
