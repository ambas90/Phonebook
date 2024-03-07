import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import useAuth from 'hooks/useAuth';
import { HeaderLink, UserMenuContainer } from './UserMenuStyles';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <UserMenuContainer>
      <p>Hi {user.email}</p>
      <HeaderLink onClick={handleLogout}>Logout</HeaderLink>
    </UserMenuContainer>
  );
}
