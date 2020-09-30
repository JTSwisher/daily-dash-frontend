import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import NavigationBar from './NavigationBar'
import LandingContainer from './landingPage/LandingContainer'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import HomeContainer from './home/HomeContainer'
import ShowsContainer from './shows/ShowsContainer'

function App() {
  let nav;
  if ( window.location.pathname.split('/')[1] === "dash" ) {
    nav = <NavigationBar />
  }
 
  return (
    <div className="app">
    <BrowserRouter>
      { nav }
      <Route exact path="/" component={LandingContainer}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/dash/home" component={HomeContainer}/>
      <Route exact path="/dash/shows" component={ShowsContainer} />
    </BrowserRouter>
    </div>
  );
}

export default App;
