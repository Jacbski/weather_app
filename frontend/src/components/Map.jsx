import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';




function Map({ coordinates,city,mainWeather, description,temperature,feelsLike,pressure,windSpeed,cloudiness}) {
  useEffect(() => {
    
      const mapInstance = L.map('map').setView(coordinates, 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance);
      if (coordinates) {
      const popupContent = `
        <div>
          <h2>${city}</h2>
          <p>Main Weather: ${mainWeather}</p>
          <p>Description: ${description}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Feels Like: ${feelsLike}°C</p>
          <p>Pressure: ${pressure} hPa</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
          <p>Cloudiness: ${cloudiness}%</p>
        </div>
      `;
      
      L.marker(coordinates)
        .addTo(mapInstance)
        .bindPopup(popupContent)
        .openPopup();

      return () => {
        if (mapInstance) {
          mapInstance.remove();
        }
      };
    }
  }, [coordinates]);

  return <div id="map" style={{ height: '90vh' }}></div>;
}

export default Map;
