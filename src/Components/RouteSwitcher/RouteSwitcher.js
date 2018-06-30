import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App/App';

const RouteSwitcher = (props) => (

    <Switch>
      <Route path='/:any' component={App}/>
      <Route path='/' component={App}/>
    </Switch>

)

export default RouteSwitcher;
