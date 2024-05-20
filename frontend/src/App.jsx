import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState([54.372158, 18.638306]); 

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);

   
      const { coord } = response.data;
      setCoordinates([coord.lat, coord.lon]);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (city) {
        fetchWeatherData();
      }
    }, 1000); 

    return () => clearTimeout(timeoutId);
  }, [city]);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Main Weather: {weatherData.weather[0].main}</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels Like: {weatherData.main.feels_like}°C</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Cloudiness: {weatherData.clouds.all}%</p>
          <p>Country: {weatherData.sys.country}</p>
        </div>
      )}
      <Map coordinates={coordinates} city={city} />
    </div>
  );
}

export default App;
