import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import {createBrowserHistory} from "history";
import ReactGA from "react-ga";

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname, hash: location.hash });
  ReactGA.pageview(`${location.pathname}${location.hash}`);
});

export interface IAppRouterProps {}

const AppRouter: React.FC<IAppRouterProps> = ({}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
