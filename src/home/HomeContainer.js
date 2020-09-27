import React, { useState, useEffect } from 'react';
import './Home.css'
import Clock from './Clock'

let getDate = () => {
    let d = new Date().toString().split(' ');
    let day = d.slice(0,1);
    let month = d.slice(1,2);
    let dayNumber = d.slice(2,3)
    let currentDate = day + ", " + month + " " + dayNumber;
    return currentDate
}

export default function HomeContainer() {

    let time = <Clock />
    return(
        <div className="home-container">
            <p className="home-greeting">Welcome Jeff</p>
            { time }
            <h2 className="home-date">{ getDate() }</h2>
        </div>
    )
}