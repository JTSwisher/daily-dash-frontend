import React, {useState, useEffect} from 'react'
import './Weather.css'
import WeatherForm from './WeatherForm'

export default function WeatherContainer() {
    const [location, setLocation] = useState(false)

    let handleLocationFormSubmit = (z) => {
        setLocation(!location)
    }

    return(
        <div className="weather-container">
            <WeatherForm location={location} updateLocationState={handleLocationFormSubmit}/>
        </div>
    )
}