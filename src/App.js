
import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'

import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
      </Switch>
      </Router>
    </div>
  );
}

export default App;