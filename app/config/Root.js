import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App.jsx';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </Router>
  );
};
export default Root;

