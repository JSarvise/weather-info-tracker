import inquirer from 'inquirer';
import apiService from './services/api.service';

import {deleteWeatherData, getAllWeatherData, saveWeatherData} from "./services/weather.service";
import {exportWeatherDataToCSV} from "./services/file.service";

async function main() {
  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: [
        'Fetch Current Weather',
        'View Saved Weather Data',
        'Export Weather Data to CSV',
        'Delete Weather Record',
        'Exit'
      ]
    });

    //Continue here
  }
}

(async () => {
  await main();
})();
