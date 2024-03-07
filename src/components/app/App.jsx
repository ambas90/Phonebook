import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';

import RegisterForm from '../registerForm/RegisterForm';
import LoginForm from 'components/loginForm/LoginForm';
import Layout from 'components/layout/Layout';
import Home from 'components/home/Home';
import Phonebook from 'components/phonebook/Phonebook';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';
import NotFound from 'components/notFound/NotFound';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>loading...</p>;
  }

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PrivateRoute
                Component={<RegisterForm />}
                redirecTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <PrivateRoute Component={<LoginForm />} redirecTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<ProtectedRoute Component={<Phonebook />} redirecTo="/" />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
