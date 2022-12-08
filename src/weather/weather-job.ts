import getWeather from './get-weather';
import { WeatherCondition } from './types';
import flagpoleSdk from '../flagpole/flagpole-sdk';

const CLEAR_CONDITION_CODE = 800;

const isBadWeather = (conditions: Array<WeatherCondition>) =>
  conditions.some(({ id }) => id < CLEAR_CONDITION_CODE);

const weatherJob = async () => {
  let weather: WeatherCondition[] = [];

  try {
    ({ weather } = await getWeather());
  } catch (e) {
    console.warn(e);
    return;
  }

  const { configuration } = await flagpoleSdk.getConfiguration();

  if (!isBadWeather(weather) || configuration?.hasWeatherProofFlag) {
    return;
  }

  if (configuration?.hasMotor) {
    await flagpoleSdk.addRequest({ input: { action: 'LOWER' } });
  }
};

export default weatherJob;
