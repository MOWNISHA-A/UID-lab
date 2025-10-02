import React, { useState, useEffect } from 'react';
import { 
  weatherService, 
  getCurrentLocation, 
  formatWeatherData, 
  formatForecastData 
} from './weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [cityInput, setCityInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load default weather data for a city (optional)
  useEffect(() => {
    // You can set a default city here
    // handleCitySearch('New York');
  }, []);

  const handleCitySearch = async (cityName = null) => {
    const city = cityName || cityInput.trim();
    if (!city) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const [currentWeather, forecast] = await Promise.all([
        weatherService.getCurrentWeatherByCity(city),
        weatherService.getForecastByCity(city)
      ]);

      setWeatherData(formatWeatherData(currentWeather));
      setForecastData(formatForecastData(forecast));
      setCityInput('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSearch = async () => {
    setLoading(true);
    setError('');

    try {
      console.log('Starting location search...');
      const location = await getCurrentLocation();
      console.log('Location obtained:', location);
      
      const [currentWeather, forecast] = await Promise.all([
        weatherService.getCurrentWeatherByCoords(location.lat, location.lon),
        weatherService.getForecastByCoords(location.lat, location.lon)
      ]);

      console.log('Weather data received successfully');
      setWeatherData(formatWeatherData(currentWeather));
      setForecastData(formatForecastData(forecast));
    } catch (err) {
      console.error('Location search error:', err);
      setError(err.message);
      
      // Provide additional helpful information
      if (err.message.includes('denied')) {
        setError(err.message + ' You can manually search for your city instead.');
      } else if (err.message.includes('API key')) {
        setError('API configuration issue. Please try searching by city name.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCitySearch();
    }
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '🌨️',
      'Mist': '🌫️',
      'Fog': '🌫️',
      'Haze': '🌫️'
    };
    return icons[condition] || '🌤️';
  };

  return (
    <div className="app">
      <div className="weather-container">
        {/* Header */}
        <div className="weather-header">
          <span className="weather-icon">🌤️</span>
          <h1 className="weather-title">Weather App</h1>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Enter city name..."
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="search-btn" 
            onClick={() => handleCitySearch()}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        <button 
          className="location-btn" 
          onClick={handleLocationSearch}
          disabled={loading}
        >
          📍 Use My Location
        </button>

        {/* Demo button for testing */}
        <button 
          className="search-btn" 
          onClick={() => handleCitySearch('London')}
          disabled={loading}
          style={{ marginTop: '10px', background: '#ff9800' }}
        >
          🏙️ Try Demo (London)
        </button>

        {/* Error Message */}
        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading">
            Loading weather data...
          </div>
        )}

        {/* Weather Display */}
        {weatherData && !loading && (
          <div className="weather-display">
            <h2 className="city-name">
              {weatherData.city}, {weatherData.country}
            </h2>

            <div className="current-weather">
              <div className="weather-detail">
                <span className="weather-detail-icon">🌡️</span>
                <span>Temp: {weatherData.temperature}°C</span>
              </div>
              
              <div className="weather-detail">
                <span className="weather-detail-icon">{getWeatherIcon(weatherData.main)}</span>
                <span>{weatherData.description}</span>
              </div>

              <div className="weather-detail">
                <span className="weather-detail-icon">💨</span>
                <span>Wind: {weatherData.windSpeed} m/s</span>
              </div>

              <div className="weather-detail">
                <span className="weather-detail-icon">💧</span>
                <span>Humidity: {weatherData.humidity}%</span>
              </div>
            </div>
          </div>
        )}

        {/* 5-Day Forecast */}
        {forecastData.length > 0 && !loading && (
          <div className="forecast-section">
            <div className="forecast-container">
              {forecastData.map((day, index) => (
                <div key={index} className="forecast-item">
                  <div className="forecast-date">
                    {day.day}, {day.dateStr}
                  </div>
                  <div className="forecast-temp">
                    <span className="weather-detail-icon">🌡️</span>
                    <span>{day.temperature}°C</span>
                  </div>
                  <div className="forecast-condition">
                    {day.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;