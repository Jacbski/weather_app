import React, { useState } from 'react';
import axios from 'axios';
import Map from './components/Map';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState([54.372158, 18.638306]); 
  const [fetchingWeather, setFetchingWeather] = useState(false);
  const name = weatherData?.name || '';
  const mainWeather = weatherData?.weather[0]?.main || '';
  const description = weatherData?.weather[0]?.description || '';
  const temperature = weatherData?.main?.temp || '';
  const feelsLike = weatherData?.main?.feels_like || '';
  const pressure = weatherData?.main?.pressure || '';
  const windSpeed = weatherData?.wind?.speed || '';
  const cloudiness = weatherData?.clouds?.all || '';
  const country = weatherData?.sys?.country || '';
  const lat = weatherData?.coord?.lat || '';
  const lon = weatherData?.coord?.lon || '';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
      const { coord } = response.data;
      setCoordinates([coord.lat, coord.lon]);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    } finally {
      setFetchingWeather(false);
    }
  };

  const handleGetWeather = () => {
    if (city && !fetchingWeather) {
      setFetchingWeather(true);
      fetchWeatherData();
    }
  };

 
    
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleGetWeather}>Get Weather</button>
      {/* {weatherData && (
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
          <p>Lat: {weatherData.coord.lat}</p>
          <p>Lon: {weatherData.coord.lon}</p>
        </div>
      )} */}
      <Map 
        coordinates={coordinates} 
        city={name} 
        mainWeather={mainWeather}
        description={description} 
        temperature={temperature} 
        feelsLike={feelsLike}
        pressure={pressure} 
        windSpeed={windSpeed} 
        cloudiness={cloudiness} 
      />
    </div>
  );
}

export default App;
