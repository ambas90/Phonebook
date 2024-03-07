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
import { Helmet } from 'react-helmet';
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
        <LoginFormUi onSubmit={handleSubmit} autoComplete="off">
          <LoginFormLabel>
            Email
            <LoginFormInput type="email" name="email" />
          </LoginFormLabel>
          <LoginFormLabel>
            Password
            <LoginFormInput type="password" name="password" />
          </LoginFormLabel>
          <LoginButton type="submit">Login</LoginButton>
        </LoginFormUi>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginForm;
