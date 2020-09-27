import React from 'react';
import './Home.css'

let getDate = () => {
    let d = new Date().toString().split(' ');
    let day = d.slice(0,1);
    let month = d.slice(1,2);
    let dayNumber = d.slice(2,3)
    let currentDate = day + ", " + month + " " + dayNumber;
    return currentDate
}

export default function HomeContainer() {
    return(
        <div className="home-container">
            <p className="home-greeting">Welcome Jeff</p>
            <h4 className="home-date">{getDate()}</h4>
        </div>
    )
}