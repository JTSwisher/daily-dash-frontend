import React, {useState, useEffect} from 'react'
import './Weather.css'
import WeatherForm from './WeatherForm'
import DisplayWeather from './DisplayWeather'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY  

export default function WeatherContainer() {
    const [isLocationGiven, setIsLocationGiven] = useState(false)
    const [locationKey, setLocationKey] = useState('')
    const [locationName, setLocationName] = useState('')
    const [zipcode, setZipcode] = useState('')

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

    // daily temperature forecast
    const [dailyForecastMinimum, setDailyForecastMinimum] = useState()
    const [dailyForecastMaximum, setDailyForecastMaximum] = useState()
    useEffect(() => { 
        if (locationKey.length === 0) return
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
            setDailyForecastMinimum(() => res.DailyForecasts[0].Temperature.Minimum.Value)
            setDailyForecastMaximum(() => res.DailyForecasts[0].Temperature.Maximum.Value)
        })
    }, [locationKey])

    // current temperature
    const [currentTemperature, setCurrentTemperature] = useState('')
    const [weatherIcon, setWeatherIcon] = useState()
    useEffect(() => { 
        if (locationKey.length === 0) return
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setCurrentTemperature(() => res[0].Temperature.Imperial.Value)
            setWeatherIcon(() => res[0].WeatherIcon)
        })
    }, [locationKey])

    return(
        <div className="weather-container">
            <WeatherForm location={isLocationGiven} updateLocationState={handleLocationFormSubmit}/>
            <DisplayWeather current={currentTemperature} icon={weatherIcon} forecastMinimum={dailyForecastMinimum} forecastMaximum={dailyForecastMaximum} location={locationName}/>
        </div>
    )
}