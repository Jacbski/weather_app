import React from 'react';
import L from 'leaflet';
import '../css/Marker.scss';  

const hotWeather = (city, temperature) => {
  const RectangleIcon = L.divIcon({
    className: 'rectangle-marker',
    html: `
      <div class="rectangle-marker_temp_hot">${temperature}°C</div>
      <div class="rectangle-marker_city_hot">${city}</div>
    `,
  });

  return RectangleIcon;
};

const coldWeather = (city, temperature) => {
  const RectangleIcon = L.divIcon({
    className: 'rectangle-marker',
    html: `
      <div class="rectangle-marker_temp_cold">${temperature}°C</div>
      <div class="rectangle-marker_city_cold">${city}</div>
    `,
  });

  return RectangleIcon;
};

export { hotWeather, coldWeather };
