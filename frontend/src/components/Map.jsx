import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Map.scss';  
import {hotWeather,coldWeather} from './Marker';


function Map({ coordinates, city, mainWeather, description, temperature, feelsLike, pressure, windSpeed, cloudiness }) {
  useEffect(() => {
    const mapInstance = L.map('map').setView(coordinates, 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance);

    let marker = null;

    if (city) {
      const roundedTemperature = Math.round(temperature);
      const popupContent = `
        <div class="popup-content">
          <h2>${city}</h2>
          <p>Main Weather: ${mainWeather}</p>
          <p>Description: ${description}</p>
          <p>Temperature: ${roundedTemperature}°C</p>
          <p>Feels Like: ${feelsLike}°C</p>
          <p>Pressure: ${pressure} hPa</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
          <p>Cloudiness: ${cloudiness}%</p>
        </div>
      `;


      const markerIcon = roundedTemperature > 20 ? hotWeather(city, roundedTemperature) : coldWeather(city, roundedTemperature);
      marker = L.marker(coordinates, { icon: markerIcon }).addTo(mapInstance).bindPopup(popupContent);
      
    }

    return () => {
      if (marker) {
        mapInstance.removeLayer(marker);
      }
      mapInstance.remove();
    };
  }, [coordinates, city, mainWeather, description, temperature, feelsLike, pressure, windSpeed, cloudiness]);

  return <div id="map" className="map-container"></div>;
}

export default Map;
