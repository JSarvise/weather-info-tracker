import fs from "fs";
import path from "path";
import { openDB } from "./database.service";

async function exportWeatherDataToCSV(): Promise<void> {
  const db = await openDB();
  const filePath = path.join(__dirname, "../data/weather_data.csv");
  const directoryPath = path.dirname(filePath);

  // Ensure the 'data' directory exists
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  try {
    const data = await db.all(`SELECT * FROM weather`);

    const headers = "City,Temperature,Humidity,Timestamp\n";
    const rows = data
      .map((row) => `${row.city},${row.temperature},${row.humidity},${row.timestamp}`)
      .join("\n");

    fs.writeFileSync(filePath, headers + rows);
    console.log("Weather data exported to CSV file.");
  } catch (error) {
    console.error(`Error exporting weather data to CSV: ${error}`);
  } finally {
    await db.close();
  }
}

export { exportWeatherDataToCSV };
