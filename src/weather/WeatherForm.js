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
        <div className="weather-form" style={{display: (props.location || !!localStorage.getItem('weatherKey') ? 'none' : '')}}>
            <p id="weather-prompt" onClick={() => props.updateDisplay(!props.display)} ><em>Get Weather Data?</em></p>
            <form id="weather-form" onSubmit={(e) => handleFormSubmit(e)} style={{display: (props.display ? '' : 'none')}}>
                <input id="weather-input" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode..." required></input>
                <button type="submit" id="weather-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
            </form>
        </div>
    )
}

