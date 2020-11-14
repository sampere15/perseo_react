import { BrowserRouter, Switch, Route } from "react-router-dom";

//  Component to protect private routes
import PrivateRoute from "../components/routes/PrivateRoute";

//  Our pages
import Login from "../pages/Login";
import Main from "../pages/Main";
import Player from "../pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route exact path='/' component={Main} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/player' component={Player} />
      </Switch>
    </BrowserRouter>
  );
}