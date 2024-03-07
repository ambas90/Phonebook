import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/Navigation';
import UserMenu from 'components/userMenu/UserMenu';
import useAuth from 'hooks/useAuth';
import { LayoutContainer } from './LayoutStyles';

export default function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <LayoutContainer>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </LayoutContainer>
      <Outlet />
    </>
  );
}
