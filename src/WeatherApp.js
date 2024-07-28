// src/WeatherApp.js
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import './WeatherApp.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9393b4d6f60130ce65dba02c0e96950&units=metric`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <div className="weather-app">
        <h1>Weather Finder</h1>
        <div className="input-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={fetchWeather}>Get Weather</button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </div>
  );
};

export default WeatherApp;
