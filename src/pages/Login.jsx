import React, { useState, useEffect } from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import validate from "validate.js";
import { 
  emailValidation, 
  requiredValidation
} from "../utils/ValidationConstraints";
import md5 from "md5";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/authActions";

export default function Login({history}) {
  const [validationErrors, setValidationErrors] = useState(null);
  const [formData, setFormData] = useState({email: "", password: ""});

  const dispatch = useDispatch();
  const { auth, errorMessage } = useSelector(state => state.auth);

  //  If user is logged we redirect to the main pagin
  useEffect(() => {
    if(auth) {
      history.push("/");
    }
  }, [auth]);

  //  
  const onSubmit = e => {
    e.preventDefault();
    
    //  Check validation
    const validationResult = validate({
      emailValidation: formData.email,
      requiredValidation: formData.password 
    }, {emailValidation, requiredValidation});

    setValidationErrors(validationResult);
    if(validationResult) {  //  If error, we dont continue
      return;
    }

    const userData = {
      user: formData.email,
      pass: md5(formData.password),
      device: "Web"
    };

    //  Call action who send the request
    dispatch(loginAction(userData));
  };

  //  Function callen when input onChange event is fired
  const onChange = e => {
    //  We set key of formData with the value arrived
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box className="box-center-vertically">
        <div className="login-form">
          <Typography variant="h4" className="login-title">Welcome to Perseo TV</Typography>
          {errorMessage &&
            <Typography className="span-error" variant="h6">{errorMessage}</Typography>
          }
          <form onSubmit={onSubmit}>
            <TextField
              className="border-error"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => onChange(e)}
              autoFocus
            />
            {validationErrors && validationErrors.emailValidation
            ? <span className="span-error">{validationErrors.emailValidation[0]}</span>
            : null
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => onChange(e)}
            />
            {validationErrors && validationErrors.requiredValidation
            ? <span className="span-error">{validationErrors.requiredValidation[0]}</span>
            : null
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Box>
    </Container>
  )
}
