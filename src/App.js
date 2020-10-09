import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './History'
import './App.css'
import LandingContainer from './landingPage/LandingContainer'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import HomeContainer from './home/HomeContainer'
import ShowsContainer from './shows/ShowsContainer'

function App() {
 
  return (
    <div className="app">
      <Router history={history}>
        <Route exact path="/" component={LandingContainer}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dash/home" component={HomeContainer}/>
        <Route exact path="/dash/shows" component={ShowsContainer} />
      </Router>
    </div>
  );
}

export default App;
