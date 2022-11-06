import getWeather from './get-weather';
import { WeatherCondition } from './types';
import flagpoleSdk from '../flagpole/flagpole-sdk';

const CLEAR_CONDITION_CODE = 800;

const isBadWeather = (conditions: Array<WeatherCondition>) =>
  conditions.some(({ id }) => id < CLEAR_CONDITION_CODE);

const weatherJob = async () => {
  const { weather } = await getWeather();
  const { configuration } = await flagpoleSdk.getConfiguration();

  if (!isBadWeather(weather) || configuration?.hasWeatherProofFlag) {
    return;
  }

  if (configuration?.hasMotor) {
    await flagpoleSdk.addRequest({ input: { action: 'LOWER' } });
  }
};

export default weatherJob;
