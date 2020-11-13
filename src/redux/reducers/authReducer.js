import { LOGGINGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../actionTypes/auth";

const initialState = {
  loggingin: false, //  waiting for the loggin response
  auth: false, //  if we are logged
  token: null, //  auth token
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
