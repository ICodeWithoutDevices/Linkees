import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';

ReactDOM.render( < React.StrictMode >
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
    </React.StrictMode>,
    document.getElementById('root')
);