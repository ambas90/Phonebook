import { useDispatch } from "react-redux";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { LoginForm } from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import { RegisterForm } from "./components/RegisterForm";
import TasksList from "./components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import useAuth from "./hooks/useAuth";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  if (isRefreshing) {
    return <p>loading...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="tasks"
            element={
              <ProtectedRoute Component={<TasksList />} redirecTo="/login" />
            }
          />
          <Route
            path="login"
            element={
              <PrivateRoute Component={<LoginForm />} redirecTo="/tasks" />
            }
          />
          <Route
            path="register"
            element={
              <PrivateRoute Component={<RegisterForm />} redirecTo="/tasks" />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
