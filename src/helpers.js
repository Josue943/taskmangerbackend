import React from "react";
import styled from "@emotion/styled";

export const renderInput = (
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  icon = "fas fa-folder"
) => {
  return (
    <FormControl>
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={e => onChange(e)}
        type={type}
        className={error ? "danger" : null}
      />
      {error ? <p className="error">{error}</p> : null}
      <i className={icon}></i>
    </FormControl>
  );
};

export const renderButton = name => {
  return <Button>{name}</Button>;
};

export const FormContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .main-content {
    width: 390px;
    background: white;
    padding: 30px 20px;
    border-radius: 5px;
  }
  form {
    display: flex;
    flex-flow: wrap column;
    .link {
      padding-top: 15px;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;

const FormControl = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  label {
    flex-basis: 90px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }
  input {
    flex: 1;
    width: 100%;
    height: 24px;
    border: 1px solid gray;
    transition: all 0.3s ease;
    padding: 2px 8px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
  .fas {
    position: absolute;
    top: 5px;
    left: 365px;
  }
  .error {
    padding-top: 2px;
    flex-basis: 100%;
    color: red;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
`;

const Button = styled.button`
  background: red;
  margin-top: 22px;
  border: none;
  border-radius: 5px;
  padding: 9px;
  background: #293040;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;
