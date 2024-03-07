import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/operations";
import useAuth from "../hooks/useAuth";

export default function LogoutButton() {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  if (!isLoggedIn) return null;
  return <button onClick={handleLogout}>Logout</button>;
}
