import logger from "../utils/logger";
import { WeatherData } from "../models/weather.model";
import { Database } from "sqlite";
import { openDB } from "./database.service";

async function saveWeatherData(data: WeatherData): Promise<void> {
  const db = await openDB();
  try {
    const timestamp = new Date().toISOString();
    await db.run(
      `INSERT INTO weather (city, temperature, humidity, timestamp) VALUES (?, ?, ?, ?)`,
      [data.city, data.temperature, data.humidity, timestamp]
    );
    console.log(`Weather data saved for ${data.city}`);
  } catch (error) {
    console.error(`Error saving weather data for ${data.city}: ${error}`);
  } finally {
    await db.close();
  }
}

async function getAllWeatherData(): Promise<WeatherData[]> {
  const db = await openDB();
  try {
    const rows = await db.all(`SELECT * FROM weather`);
    return rows.map((row) => ({
      city: row.city,
      temperature: row.temperature,
      humidity: row.humidity,
      description: "", // Assuming the 'description' field is not saved in the database
      timestamp: row.timestamp,
    }));
  } catch (error) {
    console.error(`Error retrieving weather data: ${error}`);
    return [];
  } finally {
    await db.close();
  }
}

async function deleteWeatherData(city: string): Promise<void> {
  const db = await openDB();
  try {
    const result = await db.run(`DELETE FROM weather WHERE city = ?`, city);
    if (result && result.changes && result.changes > 0) {
      console.log(`Weather data for ${city} deleted successfully.`);
    } else {
      console.log(`No weather data found for ${city}.`);
    }
  } catch (error) {
    console.error(`Error deleting weather data for ${city}: ${error}`);
  } finally {
    await db.close();
  }
}

export { saveWeatherData, getAllWeatherData, deleteWeatherData };
