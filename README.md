Jest to prosta aplikacja do sprawdzania pogody.
Całość bazuje na api pochodzące z OpenWeather, skąd pobierane są dane o pogodzie w wybranym miejscu. Aplikacja jest podzielona na backend oraz frontend, gdzie backend służy nam do pobrania danych z OpenWeatherAPI aby następnie mógł odpowiadać na zapytania wysyłane przez frontend. W frontendzie oprócz wysyłania zapytań do backendu o aktualne dane, posiadamy również generowanie mapy oraz markerów do zaznaczania miast. Całość można pobrać do siebie i uruchomic za pomoca Dockera.

Insturkcja do dockera
1. W wybranym folderze przy użyciu linijki komend uruchomic "git clone https://github.com/Jacbski/weather_app.git" aby sklonować cały projekt lokalnie do siebie 
2. Uruchomić program docker a następnie w lini poleceń wpisać "docker-compose up --build"
