import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup'
import User from './pages/user'

import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path="/user" component={User}/>
        </Switch>
      </Router>
  );
}

export default App;
