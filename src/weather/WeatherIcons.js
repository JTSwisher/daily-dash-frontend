import React from 'react'
import { WiDaySunny, WiCloudy, WiDayThunderstorm, WiDaySnow, WiNightClear, WiNightAltCloudy, WiNightAltRainMix } from 'react-icons/wi'

export const weatherIcons = {
    sunny: <WiDaySunny id="weather-icon"/>, // 1-5
    cloudy: <WiCloudy id="weather-icon"/>, // 6-11
    raining: <WiDayThunderstorm id="weather-icon"/>, //12-18
    snow: <WiDaySnow id="weather-icon"/>, //19-29
    night: <WiNightClear id="weather-icon" />, // 33-34
    cloudyNight: <WiNightAltCloudy id="weather-icon" />, //35-38
    rainyNight: <WiNightAltRainMix id="weather-icon" />//39-44
}