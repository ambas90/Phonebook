import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectToken,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    token,
  };
};

export default useAuth;
