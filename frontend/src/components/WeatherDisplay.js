import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'bd098c1788bcaf93dae4ada8e889ab34';
        const city = 'London'; // Replace with your desired city
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-details border rounded p-2">
      {weatherData && (
        <div>
          {/* Display the weather icon */}
          <FontAwesomeIcon icon={faSun} className="weather-icon" />

          {/* Display the temperature */}
          <span className="temperature">{parseInt(weatherData.main.temp)}°C</span>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
