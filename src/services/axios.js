import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const setHeaders = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
