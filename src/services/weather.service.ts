import logger from '../utils/logger';
import {WeatherData} from "../models/weather.model";
import {Database} from "sqlite";
import {openDB} from './database.service';

async function saveWeatherData(data: WeatherData): Promise<void> {
}

async function getAllWeatherData(): Promise<WeatherData[]> {
  return [];
}

async function deleteWeatherData(city: string): Promise<void> {
}

export { saveWeatherData, getAllWeatherData, deleteWeatherData };
