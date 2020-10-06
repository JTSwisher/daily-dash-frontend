import React, {useState, useEffect} from 'react'
import './Weather.css'
import WeatherForm from './WeatherForm'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY  

export default function WeatherContainer() {
    const [isLocationGiven, setIsLocationGiven] = useState(false)
    const [locationKey, setLocationKey] = useState('')
    const [locationName, setLocationName] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [currentTemperature, setCurrentTemperature] = useState([])
    const [dailyForecast, setDailyForecast] = useState([])

    let handleLocationFormSubmit = (z) => {
        setIsLocationGiven(!isLocationGiven)
        setZipcode(z)
    }

    useEffect(() => {
        if (isLocationGiven === false) return
        fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/US/search?apikey=${API_KEY}&q=${zipcode}`)
        .then(res=> res.json())
        .then(res=> {
            if (res.length !== 0) {
                setLocationName(res['0']['EnglishName'])
                setLocationKey(res['0']['Key'])
            } else {
                window.alert(`No weather data found for zipcode (${zipcode}), please try again.`)
            }
            console.log(locationKey)
        })
    }, [isLocationGiven])

    useEffect(() => {
        if (locationKey.length === 0) return
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(res => setDailyForecast(() => [...res.DailyForecasts]))
    }, [locationKey])

    useEffect(() => {
        if (locationKey.length === 0) return
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(res => setCurrentTemperature(() => [...res]))
    }, [locationKey])

    return(
        <div className="weather-container">
            <WeatherForm location={isLocationGiven} updateLocationState={handleLocationFormSubmit}/>
        </div>
    )
}