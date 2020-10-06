import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'

export default function WeatherForm(props) {
    const [zipcode, setZipcode] = useState('')

    let handleFormSubmit = (e) => {
        e.preventDefault();
        props.updateLocationState(zipcode)
        setZipcode('')
    }

    return(
        <div className="weather-form" style={{display: (props.location ? 'none' : '')}}>
            <form id="weather-form" onSubmit={(e) => handleFormSubmit(e)}>
                <input id="weather-input" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode..." required></input>
                <button type="submit" id="weather-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
            </form>
            <p id="weather-prompt"><em>Enter zipcode for current weather data</em></p>
        </div>
    )
}