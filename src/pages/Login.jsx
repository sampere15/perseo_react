import React, { useEffect } from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
//  Redux
import { useSelector } from "react-redux";

import LoginForm from "../components/login/LoginForm";

export default function Login({history}) {
  const { auth, errorMessage } = useSelector(state => state.auth);

  //  If user is logged we redirect to the main pagin
  useEffect(() => {
    if(auth) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [auth]);  

  return (
    <Container component="main" maxWidth="sm">
      <Box className="box-center-vertically">
        <div className="login-form">
          <Typography variant="h4" className="login-title">Welcome to Perseo TV</Typography>
          {errorMessage &&
            <Typography className="span-error" variant="h6">{errorMessage}</Typography>
          }
          <LoginForm />
        </div>
      </Box>
    </Container>
  )
}
