import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  RegisterContainer,
  RegisterFormUi,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterButton,
  RegisterWrapper,
} from './RegisterFormStyles';
import { Helmet } from 'react-helmet';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(registerData));
    form.reset();
  };

  return (
    <RegisterContainer>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterWrapper>
        <RegisterFormUi onSubmit={handleSubmit} autoComplete="off">
          <RegisterFormLabel>
            Username
            <RegisterFormInput type="text" name="name" />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Email
            <RegisterFormInput type="email" name="email" />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Password
            <RegisterFormInput type="password" name="password" />
          </RegisterFormLabel>
          <RegisterButton type="submit">Register</RegisterButton>
        </RegisterFormUi>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default RegisterForm;
