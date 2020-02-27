import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./AuthReducer";
import { axios, setHeaders } from "../../services/axios";
import { REGISTER, ERROR, GET_USER, LOGIN, LOG_OUT } from "./AuthAction";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    authenticated: false,
    errorMsg: null,
    loading: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async user => {
    try {
      const { data } = await axios.post("register", user);
      dispatch(REGISTER(data));
      getCurrentUser(data);
    } catch (error) {
      dispatch(ERROR(error.response.data));
    }
  };

  const login = async user => {
    try {
      const { data } = await axios.post("login", user);
      dispatch(LOGIN(data));
      getCurrentUser(data);
    } catch (error) {
      dispatch(ERROR(error.response.data));
    }
  };

  const getCurrentUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setHeaders(token);
    }
    try {
      const { data } = await axios.get("auth");
      dispatch(GET_USER(data));
    } catch (error) {
      dispatch(ERROR(null));
    }
  };

  const logout = () => {
    dispatch(LOG_OUT());
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ state, register, login, getCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
