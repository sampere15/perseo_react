import React from "react";
import { Route, Redirect } from "react-router-dom";

//  This way we control with a higher component the access to private routes
const RutaPrivada = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("token");

  //  If token not exists that means that is a not authorized so we redirect to login page
  return (
    <Route
      {...props}
      render={(props) =>
        token === "" || token === null ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
