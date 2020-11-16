import { BrowserRouter, Switch, Route } from "react-router-dom";

//  Our pages
import Login from "../pages/Login";
import Main from "../pages/Main";
import Player from "../pages/Player";
import Layout from "../pages/Layout";

//  Component to protecting private routes
import PrivateRoute from "../components/routes/PrivateRoute";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/layout' component={Layout} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/player/:id' component={Player} />
        <PrivateRoute path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
