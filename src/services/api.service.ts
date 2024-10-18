import axios from "axios";
import { WeatherData } from "../models/weather.model";

const API_KEY = "ac7c298bea9c61ba4d8a867d78c0f3f3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city: string): Promise<WeatherData> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // Optional: sets temperature to Celsius
      },
    });

    const data = response.data;
    const weatherData: WeatherData = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      timestamp: new Date().toISOString(),
    };

    console.log(`Weather data fetched for ${city}`);
    return weatherData;
  } catch (error) {
    console.log(`Error fetching weather data for ${city}: ${error}`);
    throw new Error("Unable to fetch weather data.");
  }
}

export default { getWeather };
