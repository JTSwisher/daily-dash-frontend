import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingContainer from './landingPage/LandingContainer'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingContainer}/>
    </BrowserRouter>
  );
}

export default App;
