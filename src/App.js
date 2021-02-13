
import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'

import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'
import Forgot from './pages/forgot/Forgot.jsx'
import Reset from './pages/reset/Reset.jsx'
import Home from '../src/pages/Home/Home.jsx'

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
          <Route path="/forgot" component={ Forgot } />
          <Route path="/reset" component={ Reset } />
          <Route path="/home" component={ Home } />
      </Switch>
      </Router>
    </div>
  );
}

export default App;