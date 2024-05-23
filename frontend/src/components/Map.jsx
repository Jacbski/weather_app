import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';  

const createRectangleMarker = (city, temperature) => {
  const RectangleIcon = L.divIcon({
    className: 'rectangle-marker',
    html: `
      <div class="rectangle-marker_temp">${temperature}°C</div>
      <div class="rectangle-marker_city">${city}</div>
    `,
  });

  return RectangleIcon;
};

function Map({ coordinates, city, mainWeather, description, temperature, feelsLike, pressure, windSpeed, cloudiness }) {
  useEffect(() => {
    const mapInstance = L.map('map').setView(coordinates, 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance);

    let marker = null;

    if (city) {
      const roundedTemperature = Math.round(temperature);
      const popupContent = `
        <h2>${city}</h2>
        <p>Main Weather: ${mainWeather}</p>
        <p>Description: ${description}</p>
        <p>Temperature: ${roundedTemperature}°C</p>
        <p>Feels Like: ${feelsLike}°C</p>
        <p>Pressure: ${pressure} hPa</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Cloudiness: ${cloudiness}%</p>
      `;

      marker = L.marker(coordinates, { icon: createRectangleMarker(city,roundedTemperature) }).addTo(mapInstance).bindPopup(popupContent);
    }

    return () => {
      if (marker) {
        mapInstance.removeLayer(marker);
      }
      mapInstance.remove();
    };
  }, [coordinates, city, mainWeather, description, temperature, feelsLike, pressure, windSpeed, cloudiness]);

  return <div id="map" style={{ height: '90vh' }}></div>;
}

export default Map;
