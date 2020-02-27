import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { state } = useContext(AuthContext);
  const { authenticated, loading } = state;

  return (
    <Route
      {...props}
      render={props =>
        !authenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
