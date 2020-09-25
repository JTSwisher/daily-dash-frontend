import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Navigationbar from './NavigationBar'
import LandingContainer from './landingPage/LandingContainer'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import HomeContainer from './home/HomeContainer'

function App() {
  return (
    <>
    <Navigationbar />
    <BrowserRouter>
      <Route exact path="/" component={LandingContainer}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/dash/home" component={HomeContainer}/>
    </BrowserRouter>
    </>
  );
}

export default App;
