import qs from 'qs';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../modules/home';
import LandingPage from '../modules/landing';
import { ROUTER_KEYS } from './routers-keys.const';

// const cmp = () => {
//   return (<div>1</div>);
// };
export const MainRouter = () => {
  document.addEventListener(
    'http-error',
    ({ detail }: CustomEventInit) =>
      (window.location.href = `/error?${qs.stringify(detail)}`),
  );

  return (
    <Router>
      <Switch>
        <Route component={LandingPage} path={ROUTER_KEYS.ROOT} />
        <Route component={HomePage} path={ROUTER_KEYS.HOME} />
      </Switch>
    </Router>
  );
};
