import { combineReducers } from "redux";
import authReducer from "./authReducer";
import mediaReducer from "./mediaReducer";

export default combineReducers({
  auth: authReducer,
  media: mediaReducer,
});
