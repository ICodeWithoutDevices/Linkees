import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NotFound from './NotFound';
const Web = () => (
  
     <Router>
      <Routes>
      <Route exact path="/" component={<App/>} />
      <Route component={<NotFound/>} />
     </Routes>
     </Router> 
   

)
//ReactDOM.render( < React.StrictMode ></React.StrictMode>,document.getElementById('root'));
render(  < React.StrictMode ><Web /> </React.StrictMode>, document.getElementById('root'));
