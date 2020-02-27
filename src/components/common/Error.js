import React from "react";
import styled from "@emotion/styled";

const Error = ({ message }) => {
  return <ErrorDiv>{message}</ErrorDiv>;
};

const ErrorDiv = styled.div`
  margin: 30px 0;
  padding: 10px 0;
  width: 100%;
  background: #a00001;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default Error;
