import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Marker from './Marker';

function Map({ coordinates, city }) {
  useEffect(() => {
    const mapInstance = L.map('map').setView([54.372158, 18.638306], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (coordinates && city) {
      const mapInstance = L.map('map');
      mapInstance.setView(coordinates, 10);
      L.marker(coordinates).addTo(mapInstance).bindPopup(city).openPopup();
    }
  }, [coordinates, city]);

  return <div id="map" style={{ height: '90vh' }}></div>;
}

export default Map;
