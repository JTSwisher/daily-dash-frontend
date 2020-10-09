import React from 'react';
import './Home.css'
import Clock from './Clock'
import CurrentDate from './CurrentDate'
import HomeMenuIcons from './HomeMenuIcons'
import TodoContainer from '../todos/TodoContainer'
import GoogleSearchBar from './GoogleSearchBar'
import WeatherContainer from '../weather/WeatherContainer'
import NavigationBar from '../NavigationBar'

export default function HomeContainer() {
    return(
        <>
        <NavigationBar />
        <div className="home-container">
            <div className="home-greeting">
                <p id="greeting">Welcome Jeff</p>
                <Clock />
                <CurrentDate />
            </div>
            <div className="menu">
                <HomeMenuIcons />
            </div>
            <div className="home-content-main">
                <div className="content">
                    <TodoContainer />
                </div>
                <div className="google-search">
                    <GoogleSearchBar />
                </div>
                <div className="weather">
                    <WeatherContainer />
                </div>
            </div>
        </div>
        </>
    )
}