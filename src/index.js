import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
const Web = () => (
    <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router> 
)
//ReactDOM.render( < React.StrictMode ></React.StrictMode>,document.getElementById('root'));
render(<Web/>, document.getElementById('root'));
