import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NotFound from './NotFound';
const Web = () => (
    < React.StrictMode >
     <Router>
      <Routes>
      <Route exact path="/" component={<App/>} />
      <Route component={<NotFound/>} />
     </Routes>
     </Router> 
    </React.StrictMode>

)
//ReactDOM.render( < React.StrictMode ></React.StrictMode>,document.getElementById('root'));
render(<Web/>, document.getElementById('root'));
