import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const api_weather = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_WEATHER}&query=${capital}`
        axios
            .get(api_weather)
            .then(response => setWeather(response.data.current))
    }, [capital])

    return (
        <div>
            {weather.temperature !== undefined ? (<><p><b>Temperature:</b> {weather.temperature} Celcius</p><img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} /><p><b>Wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</p></>) : ("")}
        </div>
    )
}
export default Weather