import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

//  Our pages
import Login from "./pages/Login";
import Main from "./pages/Main";
import Player from "./pages/Login";

//  Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/player" component={Player} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
