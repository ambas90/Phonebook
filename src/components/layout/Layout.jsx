import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/Navigation';
import { LayoutContainer } from './LayoutStyles';

export default function Layout() {
  return (
    <>
      <LayoutContainer>
        <Navigation />
      </LayoutContainer>
      <Outlet />
    </>
  );
}
