import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RouteSwitcher from './Components/RouteSwitcher/RouteSwitcher';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <BrowserRouter>
    <RouteSwitcher />
  </BrowserRouter>
), document.getElementById('root'))
// registerServiceWorker();
