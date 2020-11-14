import { BrowserRouter, Switch, Route } from "react-router-dom";

//  Our pages
import Login from "../pages/Login";
import Main from "../pages/Main";
import Player from "../pages/Player";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route exact path='/' component={Main} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/player/:id' component={Player} />
      </Switch>
    </BrowserRouter>
  );
}
