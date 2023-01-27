import { useGA4React } from 'ga-4-react';
import { BrowserHistory, createBrowserHistory } from 'history';
import React, { useLayoutEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@components/Home/Home.js';

const browserHistory = createBrowserHistory();

export interface IAppRouterProps {}

export interface ICustomRouterProps {
  history: BrowserHistory;
  children: React.ReactNode;
}

const CustomRouter: React.FC<ICustomRouterProps> = ({ history, ...rest }) => {
  const ga = useGA4React();

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(
    () =>
      history.listen((location) => {
        setState(location);
        if (ga) {
          ga.pageview(
            `${location.location.pathname}${location.location.hash}`,
            location.location.pathname,
            document.title,
          );
        }
      }),
    [ga, history],
  );

  return <Routes {...rest} location={state.location} />;
};
const AppRouter: React.FC<IAppRouterProps> = () => {
  return (
    <CustomRouter history={browserHistory}>
      <Route path={'/'} element={<Home />} />
    </CustomRouter>
  );
};

export default AppRouter;
