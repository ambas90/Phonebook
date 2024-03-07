import useAuth from 'hooks/useAuth';
import { HeaderLink } from './NavigationStyles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
      {!isLoggedIn && (
        <>
          <HeaderLink to="/register">Register</HeaderLink>
          <HeaderLink to="/login">Login</HeaderLink>
        </>
      )}
    </nav>
  );
};
