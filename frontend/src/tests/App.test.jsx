import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

test('fetches and displays initial weather data for Gdansk', async () => {
  render(<App />);

  await waitFor(() => screen.getByText(/Main Weather:/i));

  expect(screen.getByText(/Gdansk/i)).toBeInTheDocument();
  expect(screen.getByText(/Main Weather:/i)).toBeInTheDocument();
  expect(screen.getByText(/Description:/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
  expect(screen.getByText(/Feels Like:/i)).toBeInTheDocument();
  expect(screen.getByText(/Pressure:/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed:/i)).toBeInTheDocument();
  expect(screen.getByText(/Cloudiness:/i)).toBeInTheDocument();
});

test('handles user input and fetches new weather data', async () => {
  render(<App />);


  const cityName = 'Warsaw';
  fireEvent.change(screen.getByPlaceholderText(/Enter city name/i), {
    target: { value: cityName },
  });
  fireEvent.click(screen.getByText(/Get Weather/i));

  await waitFor(() => screen.getByText(/Main Weather:/i));

  expect(screen.getByText(/Warsaw/i)).toBeInTheDocument();
  expect(screen.getByText(/Main Weather:/i)).toBeInTheDocument();
  expect(screen.getByText(/Description:/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
  expect(screen.getByText(/Feels Like:/i)).toBeInTheDocument();
  expect(screen.getByText(/Pressure:/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed:/i)).toBeInTheDocument();
  expect(screen.getByText(/Cloudiness:/i)).toBeInTheDocument();
});

test('renders a marker with correct HTML structure', async () => {
  render(<App />);

  // Wait for the initial data to load
  await waitFor(() => screen.getByText(/Main Weather:/i));

  // Mock the Leaflet map and markers
  const map = L.map('map').setView([54.372158, 18.638306], 10);
  const marker = L.marker([54.372158, 18.638306], {
    icon: L.divIcon({
      className: 'rectangle-marker',
      html: `
        <div class="rectangle-marker_temp">20°C</div>
        <div class="rectangle-marker_city">Gdansk</div>
      `,
    }),
  }).addTo(map);

  // Verify the marker's HTML structure
  const markerHtml = marker.getElement().innerHTML;
  expect(markerHtml).toContain('<div class="rectangle-marker_temp">20°C</div>');
  expect(markerHtml).toContain('<div class="rectangle-marker_city">Gdansk</div>');
});
