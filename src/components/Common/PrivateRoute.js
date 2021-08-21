import React, { useContext } from "react";
import { Route, useLocation, Redirect } from "react-router-dom";
import LoginContext from '../../data/LoginContext';

const PrivateRoute = (props) => {
    const location = useLocation();
    const LoginCtx = useContext(LoginContext);
    //console.log("PrivateRoute", LoginCtx);
  
    return LoginCtx.isLoggedIn ? (
      <Route {...props} />
    ) : (
      <Redirect to={{pathname: "/login", state: { from: location } }} />
    );
  };

  export default PrivateRoute;