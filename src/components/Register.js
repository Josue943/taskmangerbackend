import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { renderInput, FormContainer, renderButton } from "../helpers";
import { useForm } from "./common/useForm";
import { AuthContext } from "../contexts/auth/AuthContext";
import Error from "../components/common/Error";

const Register = () => {
  const { register, state } = useContext(AuthContext);
  //error from backend
  const { errorMsg, authenticated } = state;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const validate = values => {
    let errors = {};
    if (values.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (values.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (values.password.length < 7) {
      errors.password = "Password should be at least 7 characters";
    }
    if (values.confirm !== values.password) {
      errors.confirm = "Both passwords are diferrents";
    }
    return errors;
  };
  const history = useHistory();

  useEffect(() => {
    if (authenticated) history.replace("/");
  }, [authenticated, history]);

  const onHandleSubmit = () => {
    delete values.confirm;
    register(values);
  };

  const { values, errors, onSubmit, onChange } = useForm(
    onHandleSubmit,
    user,
    validate
  );
  const { email, password, name, confirm } = values;

  return (
    <FormContainer>
      <div className="main-content">
        <h4 className="form-title">Register</h4>
        {errorMsg ? <Error message={errorMsg} /> : null}
        <form onSubmit={onSubmit}>
          {renderInput(
            "Name",
            "name",
            name,
            onChange,
            errors.name,
            "text",
            "fas fa-user-tie"
          )}
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
          {renderInput(
            "Confirm",
            "confirm",
            confirm,
            onChange,
            errors.confirm,
            "password",
            "fas fa-unlock-alt"
          )}
          {renderButton("Register")}
          <Link to={"/login"} className="link">
            Login
          </Link>
        </form>
      </div>
    </FormContainer>
  );
};

export default Register;
