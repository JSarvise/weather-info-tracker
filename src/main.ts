import { initialize } from "./services/database.service";
import inquirer from "inquirer";
import apiService from "./services/api.service";
import { deleteWeatherData, getAllWeatherData, saveWeatherData } from "./services/weather.service";
import { exportWeatherDataToCSV } from "./services/file.service";
import logger from "./utils/logger";

//async function to handle the main logic of the application
async function main() {
  while (true) {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: [
        "Fetch Current Weather",
        "View Saved Weather Data",
        "Export Weather Data to CSV",
        "Delete Weather Record",
        "Exit",
      ],
    });

    switch (action) {
      case "Fetch Current Weather": {
        const { city } = await inquirer.prompt({
          type: "input",
          name: "city",
          message: "Enter the city name:",
        });

        try {
          const weatherData = await apiService.getWeather(city);
          await saveWeatherData(weatherData);
          logger.logAction(`Fetched and saved weather data for ${city}`);
        } catch (error) {
          console.error(`Failed to fetch or save weather data: ${(error as Error).message}`);
          logger.logAction(`Failed to fetch or save weather data for ${city}`);
        }
        break;
      }

      case "View Saved Weather Data": {
        const data = await getAllWeatherData();
        console.log("Saved Weather Data:", data);
        logger.logAction(`Viewed saved weather data`);
        break;
      }

      case "Export Weather Data to CSV": {
        try {
          await exportWeatherDataToCSV();
          console.log("Weather data exported to CSV file.");
          logger.logAction(`Exported weather data to CSV`);
        } catch (error) {
          console.error(`Failed to export weather data to CSV: ${(error as Error).message}`);
          logger.logAction(`Failed to export weather data to CSV`);
        }
        break;
      }

      case "Delete Weather Record": {
        const { city } = await inquirer.prompt({
          type: "input",
          name: "city",
          message: "Enter the city name to delete:",
        });

        try {
          await deleteWeatherData(city);
          console.log(`Weather data for ${city} deleted successfully.`);
          logger.logAction(`Deleted weather data for ${city}`);
        } catch (error) {
          console.error(`Failed to delete weather data for ${city}: ${(error as Error).message}`);
          logger.logAction(`Failed to delete weather data for ${city}`);
        }
        break;
      }

      case "Exit":
        logger.logAction(`Application exited`);
        process.exit();
    }
  }
}

(async () => {
  await initialize();
  await main();
})();
