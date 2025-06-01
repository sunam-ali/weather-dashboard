# 🌦️ Weather Dashboard

A modern, responsive Weather Dashboard built with **React**, providing real-time weather updates using a public API. Easily search for cities, view detailed weather data, and save your favorite locations with persistent local storage.

## 🚀 Features

- 🔍 City weather search with **debounced input**
- 🌎 Display weather for **current location**
- ❤️ Add/Remove cities from **favorites**
- ☁️ Detailed weather info (temperature, humidity, wind speed, etc.)
- 💾 **Persistent data** using local storage
- ⚙️ Modular structure using **Context API** and **custom hooks**

## 🧰 Tech Stack

- **React**
- **Context API** for state management
- **Custom Hooks** for modular logic
- **OpenWeatherMap API** for weather data
- **CSS / Tailwind CSS** for styling and layouting

## 🔧 Providers Used

- **WeatherProvider** – fetches and shares weather data
- **LocationProvider** – manages geolocation logic
- **FavoriteProvider** – manages favorite cities and syncs with local storage

## 🪝 Custom Hooks

- `useDebounce` – debounces search input for better performance
- `useLocalStorage` – persists data in browser's local storage
- `useWeather` – handles API calls and returns structured weather data

## 📦 Installation

```bash
git https://github.com/sunam-ali/weather-dashboard.git
cd weather-dashboard
npm install