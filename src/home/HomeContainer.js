import React from 'react';
import './Home.css'
import Clock from './Clock'
import CurrentDate from './CurrentDate'
import HomeMenuIcons from './HomeMenuIcons'
import TodoContainer from '../todos/TodoContainer'

export default function HomeContainer() {
    return(
        <div className="home-container">
            <div className="home-greeting">
                <p id="greeting">Welcome Jeff</p>
                <Clock />
                <CurrentDate />
            </div>
            <div className="menu">
                <HomeMenuIcons />
            </div>
            <div className="content">
                <TodoContainer />
            </div>
        </div>
    )
}