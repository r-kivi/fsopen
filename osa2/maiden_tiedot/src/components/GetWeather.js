import axios from 'axios'
import React, {useEffect, useState, useRef} from 'react'

const GetWeather = (props) => {
    const [weatherData, setData] = useState({})
    const cityRef = useRef(props.city)
    useEffect(() => {
        const baseurl = "http://api.openweathermap.org/data/2.5/weather?q="
        const urlNoKey = baseurl + cityRef.current
        const key = process.env.REACT_APP_API_KEY
        const url = urlNoKey + "&appid=" + key + "&units=metric"

        axios
            .get(url)
            .then(response => {
                setData(response.data)
            })
    }, [])

    if(Object.keys(weatherData).length > 0)
    {
        return (
            <div>
                <h4>Weather in {weatherData.name}</h4>
                <p><b>temperature: </b> {parseInt(weatherData.main.temp)} °C</p>
                <p><b>weather: </b> {weatherData.weather[0].description} </p>
            </div>
        )
    }

    else return null
}

export default GetWeather