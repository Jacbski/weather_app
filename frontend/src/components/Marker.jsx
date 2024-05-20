import React from 'react';
import L from 'leaflet';

function Marker({ position, city }) {
  const markerInstance = L.marker(position).addTo(mapInstance).bindPopup(city);

  return null;
}

export default Marker;
