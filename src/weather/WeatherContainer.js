import React, {useState, useEffect} from 'react'
import './Weather.css'
import WeatherForm from './WeatherForm'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY  

export default function WeatherContainer() {
    const [isLocationGiven, setIsLocationGiven] = useState(false)

    let handleLocationFormSubmit = (z) => {
        setIsLocationGiven(!isLocationGiven)
    }



    return(
        <div className="weather-container">
            <WeatherForm location={isLocationGiven} updateLocationState={handleLocationFormSubmit}/>
        </div>
    )
}