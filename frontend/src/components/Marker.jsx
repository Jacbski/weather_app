import React from 'react';
import L from 'leaflet';

function Marker({ position, mainWeather }) {
  let markerIcon;

  // Ustaw odpowiedni styl dla markera w zależności od głównej pogody
  switch (mainWeather) {
    case 'Clear':
      markerIcon = L.icon({
        iconUrl: '1.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
      });
      break;
    case 'Clouds':
      markerIcon = L.icon({
        iconUrl: 'frontend\src\icons\registration_plate.svg',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
      });
      break;
    // Dodaj inne przypadki w zależności od potrzeb
    default:
      markerIcon = L.icon({
        iconUrl: 'frontend\src\icons\registration_plate.svg',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
      });
  }

  // Utwórz marker z odpowiednim stylem
  const markerInstance = L.marker(position, { icon: markerIcon }).addTo(mapInstance);

  return null;
}

export default Marker;
