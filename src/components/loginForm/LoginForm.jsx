import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import {
  LoginContainer,
  LoginWrapper,
  LoginFormUi,
  LoginFormLabel,
  LoginFormInput,
  LoginButton,
} from './LoginFormStyles';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(loginData));
    form.reset();
  };

  return (
    <LoginContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginWrapper>
        <h2>Sign In</h2>
        <LoginFormUi onSubmit={handleSubmit} autoComplete="off">
          <LoginFormLabel>
            Email:
            <LoginFormInput placeholder="Email" type="email" name="email" />
          </LoginFormLabel>
          <LoginFormLabel>
            Password:
            <LoginFormInput
              placeholder="Password"
              type="password"
              name="password"
            />
          </LoginFormLabel>
          <LoginButton type="submit">Login</LoginButton>
        </LoginFormUi>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginForm;
