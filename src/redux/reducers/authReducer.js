import { LOGGINGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../actionTypes/auth";

const initialState = {
  loggingin: false, //  waiting for the loggin response
  auth: false, //  if we are logged
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGINGIN:
      return {
        ...state,
        loggingin: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingin: false,
        auth: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loggingin: false,
        auth: true,
      };
    default:
      return state;
  }
}
