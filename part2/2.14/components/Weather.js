import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        console.log('here')
        const c = capital
        const api_key = process.env.REACT_APP_API_KEY
        const link = 'http://api.openweathermap.org/data/2.5/weather?q=' + c + '&appid=' + api_key
        axios
          .get(link)
          .then(response => {
            console.log(response.data)
            setWeather(response.data)
          })
    }, [])

    if (weather.length === 0){
      return 'loading...'
    }

    
    return (
      <div>
          <h1>Weather in {capital}</h1>
          <p><b>temperature: {weather.main.temp}</b></p>
          <img src={weather.weather[0].icon} alt = ''></img>
          <p><b>wind: {weather.wind.speed} m/s {weather.wind.deg} deg</b></p>
      </div>
    
    )
    
}

export default Weather
