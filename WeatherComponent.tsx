import React from 'react';
import { useFetch} from './useWeatherforecast';
import { WeatherData } from './Types';

const API_KEY = 'YOUR_API_KEY';
const CITY = 'Shamli';

const WeatherComponent:React.FC = () => {
    const {data, loading, error } = useFetch<WeatherData>(  `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);


    if (loading) return<p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!data) return null;

    return(
        <div>
            <h2>Weather in {data.name}</h2>
            <p>Tempreature: {data.main.temp}°C</p>
            <p>Description: {data.weather[0].description}</p>
        </div>
    )
}

export default WeatherComponent;