import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

//  This way we control with a higher component the access to private routes
const RutaPrivada = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("token");

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
