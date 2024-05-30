# Aplikacja Pogodowa

Aplikacja Pogodowa to prosta platforma służąca do sprawdzania aktualnej pogody w wybranych miejscach. Cała aplikacja opiera się na API dostarczanym przez OpenWeather, z którego pobierane są dane o pogodzie.

## Opis

Aplikacja składa się z dwóch głównych części: backendu i frontendu.


## Backend

Backend jest odpowiedzialny za komunikację z API OpenWeather w celu pobrania danych o pogodzie dla określonego miasta. Zaimplementowany jest w Node.js, używając frameworku Express.js. Backend odbiera zapytania wysyłane przez frontend, przekazuje je do API OpenWeather i zwraca odpowiedź.


## Frontend

Frontend pozwala użytkownikowi na wprowadzenie nazwy miasta i wysłanie zapytania do backendu w celu uzyskania aktualnych danych pogodowych. Po otrzymaniu odpowiedzi od backendu, frontend wyświetla informacje o pogodzie oraz generuje interaktywną mapę, na której można zobaczyć położenie zaznaczonych miast za pomocą markerów.


## Uruchomienie za pomocą Dockera

Aby uruchomić aplikację za pomocą Dockera, wykonaj następujące kroki:


Sklonuj repozytorium do wybranego folderu na swoim komputerze:

``` bash
git clone https://github.com/Jacbski/weather_app.git
```

Przejdź do katalogu projektu:

``` bash
cd weather_app
```

Uruchom aplikację za pomocą polecenia Docker Compose:
``` bash
docker-compose up --build
```
Po wykonaniu tych kroków aplikacja zostanie uruchomiona lokalnie na Twoim komputerze, a frontend będzie dostępny pod adresem http://localhost:3000.



# Weather Application

The Weather Application is a simple platform for checking the current weather in selected locations. The entire application relies on the API provided by OpenWeather, from which weather data is retrieved.


## Description
The application consists of two main parts: the backend and the frontend.

## Backend
The backend is responsible for communicating with the OpenWeather API to retrieve weather data for a specified city. It is implemented in Node.js, using the Express.js framework. The backend receives requests sent by the frontend, forwards them to the OpenWeather API, and returns the response.

## Frontend
The frontend allows users to enter the name of a city and send a request to the backend to obtain current weather data. Upon receiving a response from the backend, the frontend displays weather information and generates an interactive map where users can see the location of marked cities using markers.

## Running with Docker
To run the application using Docker, follow these steps:

Clone the repository to a selected folder on your computer:

```bash
git clone https://github.com/Jacbski/weather_app.git
```
Navigate to the project directory:
```bash
cd weather_app
```
Run the application using Docker Compose:
```bash
docker-compose up --build
```
After completing these steps, the application will be running locally on your computer, and the frontend will be accessible at http://localhost:3000.
