import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingContainer from './landingPage/LandingContainer'
import Login from './authentication/Login'
import Signup from './authentication/Signup'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingContainer}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
    </BrowserRouter>
  );
}

export default App;
