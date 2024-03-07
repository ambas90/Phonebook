import { useDispatch } from "react-redux";
import Helmet from "react-helmet";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch();
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
