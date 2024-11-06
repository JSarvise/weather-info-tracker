🌦️ Weather Info Tracker

Weather Info Tracker is a sleek, easy-to-use weather application that fetches and displays real-time weather information, allowing users to track weather conditions for their favorite locations. Powered by the OpenWeatherMap API, this app provides essential weather insights, including temperature and humidity.
✨ Features

    🌍 Current Weather — Get up-to-the-minute weather data for any city worldwide.
    📅 Customizable Locations — Save and revisit weather information for multiple locations with ease.
    📊 Detailed Metrics — View essential metrics such as temperature, humidity or timestamp.
    🕒 Real-Time Data — Weather data is refreshed on every request, ensuring accuracy.

🚀 Quick Start Guide
Prerequisites

    Node.js: Ensure Node.js is installed on your machine.
    Weather API Key: The project uses OpenWeatherMap’s API (no setup required as the key is already configured in api.service.ts).

Installation

    Clone the Repository:

git clone https://github.com/JSarvise/weather-info-tracker.git
cd weather-info-tracker

Install Dependencies:

npm install

Run the Application:

    npm run start

        Note: The API key is stored in api.service.ts, under the API_KEY constant.

🛠️ Usage

Upon starting the application, you'll be presented with a menu of options in the terminal:

    Fetch Current Weather — Retrieve the latest weather data for a specified city.
    View Saved Weather Data — Access previously saved weather information.
    Export Weather Data to CSV — Export saved weather data into a CSV file for easy sharing and analysis.
    Delete Weather Record — Remove a specific weather record from the saved data.
    Exit — Close the application.

Use the arrow keys to navigate through the options, and press Enter to select an action.

📜 License

This project is licensed under the MIT License. See the LICENSE file for more details.
