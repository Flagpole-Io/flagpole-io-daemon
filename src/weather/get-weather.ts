import config from './config';
import WeatherError from './weather-error';
import { WeatherResponse } from './types';

const getWeather = async (): Promise<WeatherResponse> => {
  const lat = 35.569172;
  const lon = -80.581528;

  const params = new URLSearchParams({
    lat: lat.toPrecision(2),
    lon: lon.toPrecision(2),
    appid: config.OPEN_WEATHER_API_KEY,
  });

  const response = await fetch(
    `${config.OPEN_WEATHER_BASE_URL}?${params.toString()}`,
  );

  if (!response.ok) {
    throw new WeatherError(
      `Error getting weather. Status ${response.status}, ${response.statusText}`,
    );
  }

  return response.json();
};

export default getWeather;
