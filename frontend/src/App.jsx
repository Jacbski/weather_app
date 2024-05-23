import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState([54.372158, 18.638306]);
  const [mainWeather, setMainWeather] = useState('');
  const [description, setDescription] = useState('');
  const [temperature, setTemperature] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [pressure, setPressure] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [cloudiness, setCloudiness] = useState('');
  const [fetchingWeather, setFetchingWeather] = useState(false);
  const [cities, setCities] = useState([]);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${cityName}`);
      setWeatherData(response.data);
      const { coord } = response.data;
      setCoordinates([coord.lat, coord.lon]);
      setMainWeather(response.data.weather[0].main);
      setDescription(response.data.weather[0].description);
      setTemperature(response.data.main.temp);
      setFeelsLike(response.data.main.feels_like);
      setPressure(response.data.main.pressure);
      setWindSpeed(response.data.wind.speed);
      setCloudiness(response.data.clouds.all);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    } finally {
      setFetchingWeather(false);
      setCity(''); // Reset input field
    }
  };

  const handleGetWeather = () => {
    if (city && !fetchingWeather) {
      setFetchingWeather(true);
      fetchWeatherData(city);
    }
  };

  useEffect(() => {
    fetchWeatherData('Gdansk');
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await get('./city/city.list.json');
        if (Array.isArray(response.data)) {
          setCities(response.data);
        } else {
          console.error('Cities data is not an array');
        }
      } catch (error) {
        console.error('Error fetching cities:', error.message);
      }
    };
    fetchCities();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleGetWeather}>Get Weather</button>
      <Map
        coordinates={coordinates}
        city={weatherData ? weatherData.name : ''}
        mainWeather={mainWeather}
        description={description}
        temperature={temperature}
        feelsLike={feelsLike}
        pressure={pressure}
        windSpeed={windSpeed}
        cloudiness={cloudiness}
        cities={cities}
      />
    </div>
  );
}

export default App;
