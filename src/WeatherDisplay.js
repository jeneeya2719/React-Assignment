// src/WeatherDisplay.js
import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
