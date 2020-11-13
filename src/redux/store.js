import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
  reducer,
  //  we need compose to apply the thunk middleware
  // prettier-ignore
  compose(
    applyMiddleware(thunk), 
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
