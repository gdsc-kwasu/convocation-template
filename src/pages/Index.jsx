/** @format */

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../router/history";
import { Home } from "./pages";
import PAGES_URL from "../router/routes";

const Index = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PAGES_URL.HOME} component={Home} />
      </Switch>
    </Router>
  );
};

export default Index;
