import React, { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { createBrowserHistory } from "history";
import { useGA4React } from "ga-4-react";

const history = createBrowserHistory();

export interface IAppRouterProps {}

const AppRouter: React.FC<IAppRouterProps> = ({}) => {
  const ga = useGA4React();

  useEffect(() => {
    history.listen((location) => {
      if (ga) {
        ga.pageview(
          `${location.pathname}${location.hash}`,
          location.pathname,
          document.title
        );
      }
    });
  }, [ga]);

  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
