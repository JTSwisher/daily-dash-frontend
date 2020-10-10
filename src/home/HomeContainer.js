import React, {useState, useEffect} from 'react';
import './Home.css'
import Clock from './Clock'
import CurrentDate from './CurrentDate'
import HomeMenuIcons from './HomeMenuIcons'
import TodoContainer from '../todos/TodoContainer'
import RedditContainer from '../reddit_feed/RedditContainer'
import GoogleSearchBar from './GoogleSearchBar'
import WeatherContainer from '../weather/WeatherContainer'
import NavigationBar from '../NavigationBar'

export default function HomeContainer() {
    const [mainContentIdentifier, setMainContentidentifier] = useState('todos')
    const [mainContent, setMainContent] = useState()
    //create state containers for selected content, default todos

    
    useEffect(() => {
        mainContentIdentifier === 'todos' ? setMainContent(<TodoContainer />) : setMainContent(<RedditContainer />)
    }, [mainContentIdentifier])

    const setMainContentIdentifierCallback = (value) => {
        setMainContentidentifier(value)
    }

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
                <HomeMenuIcons setMain={setMainContentIdentifierCallback} />
            </div>
            <div className="home-content-main">
                <div className="content">
                    { mainContent }
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