import React, { useState, useEffect } from 'react'
import { weatherIcons } from './WeatherIcons'

export default function DisplayWeather(props) {
    const [weatherIconKey, setWeatherIconKey] = useState('')
    const { current, icon, forecastMinimum, forecastMaximum, location } = props
  
    
    useEffect(() => {
        if (icon <= 5 || icon == 30) setWeatherIconKey('sunny')
        if (icon >= 6 && icon <= 11) setWeatherIconKey('cloudy')
        if (icon >= 12 && icon <= 18) setWeatherIconKey('raining')
        if (icon >= 19 && icon <= 29) setWeatherIconKey('snow')
        if (icon >= 33 && icon <= 34) setWeatherIconKey('night')
        if (icon >= 35 && icon <= 38) setWeatherIconKey('cloudyNight')
        if (icon>= 39 && icon <= 44) setWeatherIconKey('rainyNight')
    }, [props])
    
    let iconImage = weatherIcons[weatherIconKey]
    let minTemp =  !!forecastMinimum ? <p>min:{forecastMinimum}</p> : <p></p>
    let maxTemp =  !!forecastMinimum ? <p>min:{forecastMaximum}</p> : <p></p>
   
    return (
        <div className="weather-display">
            <p>{location}</p>
            <p>{current}</p>
            {iconImage}
            <p>{minTemp}</p>
            <p>{maxTemp}</p>
        </div>
    )
}