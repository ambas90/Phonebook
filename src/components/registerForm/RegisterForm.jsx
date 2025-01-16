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
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  useEffect(() => {
    const matchValid = password === matchPassword;
    setValidMatchPassword(matchValid);
  }, [password, matchPassword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: password,
    };
    console.log(registerData);
    if (validMatchPassword) {
      dispatch(register(registerData));
      form.reset();
    } else {
      console.log('niezgodne hasla');
    }
  };

  return (
    <RegisterContainer>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <RegisterWrapper>
        <h2>Sign Up</h2>
        <RegisterFormUi onSubmit={handleSubmit} autoComplete="off">
          <RegisterFormLabel>
            Username:
            <RegisterFormInput placeholder="Username" type="text" name="name" />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Email:
            <RegisterFormInput
              placeholder="Email address"
              type="email"
              name="email"
            />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Password:
            <RegisterFormInput
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
            />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Confirm Password:
            <RegisterFormInput
              value={matchPassword}
              onChange={e => setMatchPassword(e.target.value)}
              placeholder="Confirm Password"
              type="password"
              name="password"
            />
          </RegisterFormLabel>
          {!validMatchPassword && matchPassword.length > 0 && (
            <p>Passwords must be the same!</p>
          )}

          <RegisterButton type="submit">Create an account</RegisterButton>
          <p>
            Already have an account? <NavLink to="/login">Sign In</NavLink>
          </p>
        </RegisterFormUi>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default RegisterForm;
