import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Player from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/player" component={Player} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
