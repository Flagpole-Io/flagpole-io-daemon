import getRequiredEnvironmentVar from '../common/get-required-environment-var';

const config = {
  OPEN_WEATHER_API_KEY: getRequiredEnvironmentVar('OPEN_WEATHER_API_KEY'),
  OPEN_WEATHER_BASE_URL: getRequiredEnvironmentVar('OPEN_WEATHER_BASE_URL'),
};

export default config;
