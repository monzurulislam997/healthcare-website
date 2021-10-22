import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({children, ...others}) => {
const { user } = useAuth();

  return (<div>
      <Route
      {...others}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  </div>);
};

export default PrivateRoute;
