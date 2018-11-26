import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../Pages/NotFoundPage';
const AppRouter = () => (
  <Router>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
);
export default AppRouter;