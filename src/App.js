import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingContainer from './landingPage/LandingContainer'
import AuthContainer from './authentication/AuthContainer'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingContainer}/>
      <Route exact path="/authenticate" component={AuthContainer}/>
    </BrowserRouter>
  );
}

export default App;
