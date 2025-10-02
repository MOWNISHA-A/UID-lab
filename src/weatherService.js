import axios from 'axios';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Updated OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  // Get current weather by city name
  getCurrentWeatherByCity: async (cityName) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data. Please check the city name.');
    }
  },

  // Get current weather by coordinates
  getCurrentWeatherByCoords: async (lat, lon) => {
    try {
      console.log('Fetching weather for coordinates:', lat, lon);
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat: lat.toString(),
          lon: lon.toString(),
          appid: API_KEY,
          units: 'metric'
        }
      });
      console.log('Weather API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Weather API Error:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
      } else if (error.response?.status === 404) {
        throw new Error('Weather data not found for your location.');
      } else if (!navigator.onLine) {
        throw new Error('No internet connection. Please check your network.');
      } else {
        throw new Error(`Failed to fetch weather data: ${error.response?.data?.message || error.message}`);
      }
    }
  },

  // Get 5-day forecast by city name
  getForecastByCity: async (cityName) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch forecast data. Please check the city name.');
    }
  },

  // Get 5-day forecast by coordinates
  getForecastByCoords: async (lat, lon) => {
    try {
      console.log('Fetching forecast for coordinates:', lat, lon);
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          lat: lat.toString(),
          lon: lon.toString(),
          appid: API_KEY,
          units: 'metric'
        }
      });
      console.log('Forecast API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Forecast API Error:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
      } else if (error.response?.status === 404) {
        throw new Error('Forecast data not found for your location.');
      } else if (!navigator.onLine) {
        throw new Error('No internet connection. Please check your network.');
      } else {
        throw new Error(`Failed to fetch forecast data: ${error.response?.data?.message || error.message}`);
      }
    }
  }
};

// Get user's current location
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    console.log('Requesting geolocation...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Geolocation success:', position.coords);
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => {
        console.error('Geolocation error:', error);
        let message = 'Failed to get your location.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access denied. Please allow location access and try again.';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable. Please try again.';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out. Please try again.';
            break;
          default:
            message = `Geolocation error: ${error.message}`;
            break;
        }
        reject(new Error(message));
      },
      {
        timeout: 15000,
        enableHighAccuracy: false,
        maximumAge: 300000
      }
    );
  });
};

// Format weather data for display
export const formatWeatherData = (data) => {
  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    main: data.weather[0].main,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: data.weather[0].icon
  };
};

// Format forecast data for display
export const formatForecastData = (data) => {
  const dailyForecasts = [];
  const processedDates = new Set();

  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dateString = date.toDateString();
    
    if (!processedDates.has(dateString) && dailyForecasts.length < 5) {
      processedDates.add(dateString);
      dailyForecasts.push({
        date: date,
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        temperature: Math.round(item.main.temp),
        description: item.weather[0].description,
        main: item.weather[0].main,
        icon: item.weather[0].icon
      });
    }
  });

  return dailyForecasts;
};