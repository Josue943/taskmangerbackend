export const REGISTER = user => {
  return { type: "REGISTER", payload: user };
};

export const LOGIN = user => {
  return { type: "LOGIN", payload: user };
};

export const LOG_OUT = () => {
  return { type: "LOG_OUT" };
};

export const ERROR = msg => {
  return { type: "ERROR", payload: msg };
};

export const GET_USER = user => {
  return { type: "GET_USER", payload: user };
};
