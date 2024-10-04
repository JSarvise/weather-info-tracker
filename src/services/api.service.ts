import axios from 'axios';
import logger from '../utils/logger';
import {WeatherData} from "../models/weather.model";

const API_KEY = 'HERE-YOUR-API-KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city: string): Promise<WeatherData> {
  return {}
}

export default { getWeather };
