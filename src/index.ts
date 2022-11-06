import schedule from 'node-schedule';
import weatherJob from './weather/weather-job';
import flagStatusJob from './flag-status/flag-status-job';
import { timeJob } from './time/time-job';

schedule.scheduleJob('45 * * * *', weatherJob);

schedule.scheduleJob('30 * * * *', flagStatusJob);

schedule.scheduleJob('15 * * * *', timeJob);
