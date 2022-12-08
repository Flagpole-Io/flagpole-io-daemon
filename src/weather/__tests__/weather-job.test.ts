import getWeather from '../get-weather';
import WeatherError from '../weather-error';
import flagpoleSdk from '../../flagpole/flagpole-sdk';
import weatherJob from '../weather-job';

jest.mock('../get-weather');
jest.mock('../../flagpole/flagpole-sdk');

describe('weatherJob', () => {
  it('should warn if there is an error getting weather', async () => {
    const logSpy = jest.spyOn(console, 'warn');
    (getWeather as jest.Mock).mockRejectedValueOnce(
      new WeatherError('Some weather error'),
    );

    await weatherJob();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(flagpoleSdk.getConfiguration).toHaveBeenCalledTimes(0);
  });

  afterEach(jest.clearAllMocks);
});
