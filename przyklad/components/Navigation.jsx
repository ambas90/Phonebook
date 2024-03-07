import { NavLink } from "react-router-dom";
import css from "./style.module.css";
import useAuth from "../hooks/useAuth";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )}
      {!isLoggedIn && (
        <>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </>
      )}
    </nav>
  );
};
