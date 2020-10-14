import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './History'
import './App.css'
import LandingContainer from './landingPage/LandingContainer'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import HomeContainer from './home/HomeContainer'
import ShowsContainer from './shows/ShowsContainer'
import NewsContainer from './news/NewsContainer'

function App() {
 
  function isLoggedIn() {
    return ( localStorage.token ? true : false )
  }

  return (
    <div className="app">
      <Router history={history}>
        <Route exact path="/" component={LandingContainer}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dash/home" component={HomeContainer}>
          {isLoggedIn() ? history.push("/dash/home") : history.push("/") }
        </Route>
        <Route exact path="/dash/shows" component={ShowsContainer}>
          {isLoggedIn() ? history.push("/dash/shows") : history.push("/") }
        </Route>
        <Route exact path="/dash/news" component={NewsContainer}>
          {isLoggedIn() ? history.push("/dash/news") : history.push("/") }
        </Route>
      </Router>
    </div>
  );
}

export default App;
