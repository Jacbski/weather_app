import { useState } from 'react';

function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState([54.372158, 18.638306]); 
  const [fetchingWeather, setFetchingWeather] = useState(false);

  const [name, setName] = useState('');
  const [mainWeather, setMainWeather] = useState('');
  const [description, setDescription] = useState('');
  const [temperature, setTemperature] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [pressure, setPressure] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [cloudiness, setCloudiness] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const updateWeatherData = (data) => {
    setWeatherData(data);
    setName(data.name);
    setMainWeather(data.weather[0].main);
    setDescription(data.weather[0].description);
    setTemperature(data.main.temp);
    setFeelsLike(data.main.feels_like);
    setPressure(data.main.pressure);
    setWindSpeed(data.wind.speed);
    setCloudiness(data.clouds.all);
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLon(data.coord.lon);
  };

  return {
    weatherData,
    setWeatherData,
    city,
    setCity,
    coordinates,
    setCoordinates,
    fetchingWeather,
    setFetchingWeather,
    name,
    setName,
    mainWeather,
    setMainWeather,
    description,
    setDescription,
    temperature,
    setTemperature,
    feelsLike,
    setFeelsLike,
    pressure,
    setPressure,
    windSpeed,
    setWindSpeed,
    cloudiness,
    setCloudiness,
    country,
    setCountry,
    lat,
    setLat,
    lon,
    setLon,
    updateWeatherData
  };
}

export default useWeatherData;
