/* eslint-disable object-curly-newline */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import * as AppRoutes from "container/config";

import {
  Login,
  Home,
  Cryptocurrency,
  CryptocurrencyDetails,
  Exchanges,
  News,
} from "container/pages";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={AppRoutes.Login} component={Login} />
      <Route exact path={AppRoutes.Home} component={Home} />
      <Route exact path={AppRoutes.Cryptocurrency} component={Cryptocurrency} />
      <Route
        exact
        path={AppRoutes.CryptocurrencyDetails}
        component={CryptocurrencyDetails}
      />
      <Route exact path={AppRoutes.Exchanges} component={Exchanges} />
      <Route exact path={AppRoutes.News} component={News} />

      <Redirect from="*" to="/error-404" />
    </Switch>
  </Router>
);

export default App;
