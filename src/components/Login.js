import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { renderInput, FormContainer, renderButton } from "../helpers";
import { useForm } from "./common/useForm";
import { AuthContext } from "../contexts/auth/AuthContext";
import Error from "../components/common/Error";

const Login = () => {
  const { login, state } = useContext(AuthContext);
  const { errorMsg, authenticated } = state;

  const [user, setUser] = useState({ email: "", password: "" });

  const validate = values => {
    let errors = {};
    if (values.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (values.password.length < 7) {
      errors.password = "Password should be at least 7 characters";
    }
    return errors;
  };

  const onHandleSubmit = () => {
    login(values);
  };

  const history = useHistory();
  useEffect(() => {
    if (authenticated) {
      history.replace("/");
    }
  }, [authenticated, history]);

  const { values, errors, onSubmit, onChange } = useForm(
    onHandleSubmit,
    user,
    validate
  );
  const { email, password } = values;
  return (
    <FormContainer>
      <div className="main-content">
        <h4 className="form-title">Login</h4>
        {errorMsg ? <Error message={errorMsg} /> : null}
        <form onSubmit={onSubmit}>
          {renderInput("Email", "email", email, onChange, errors.email)}
          {renderInput(
            "Password",
            "password",
            password,
            onChange,
            errors.password,
            "password",
            "fas fa-unlock-alt"
          )}
          {renderButton("Login")}
          <Link to={"/register"} className="link">
            Create an account
          </Link>
        </form>
      </div>
    </FormContainer>
  );
};

export default Login;
