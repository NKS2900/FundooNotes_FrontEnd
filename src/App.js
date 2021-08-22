
import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'

import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'
import Forgot from './pages/forgot/Forgot.jsx'
import Reset from './pages/reset/Reset.jsx'
import Home from '../src/pages/Home/Home.jsx'
import Note from '../src/components/Note/Note.jsx'
import Archive from '../src/components/Archive/Archive.jsx'
import DisplayIcons from '../src/components/DisplayIcon/DisplayIcon.jsx'
import DisplayTrash from '../src/components/Display/DisplayTrash/DisplayTrash.jsx'
import DisplayReminder from '../src/components/Display/DisplayReminder/DisplayReminder.jsx'
import PrivateRoute from '../src/authGuard/PrivateRoute.jsx'

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
          <Route path="/forgot" component={ Forgot } />
          <Route path="/reset" component={ Reset } />
          <PrivateRoute path="/home" component={ Home } />          
          <PrivateRoute path="/archive" component={ Archive } /> 
          <PrivateRoute path="/trash" component={ DisplayTrash } /> 
          <PrivateRoute path="/reminder" component={ DisplayReminder } />
          {/* <Route path="/note" component={ Note } /> */}
          {/* <Route path="/icon" component={ DisplayIcons } /> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
