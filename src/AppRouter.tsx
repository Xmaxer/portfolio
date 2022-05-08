import { useGA4React } from 'ga-4-react';
import { BrowserHistory, createBrowserHistory } from 'history';
import React, { useLayoutEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import Home from './components/Home/Home';

const history = createBrowserHistory();

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

  return (
    <Router
      {...rest}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
const AppRouter: React.FC<IAppRouterProps> = ({}) => {
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </CustomRouter>
  );
};

export default AppRouter;
