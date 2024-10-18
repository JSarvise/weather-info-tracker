import fs from "fs";
import path from "path";

const logFilePath = path.join(__dirname, "../data/actions.log");

function logAction(action: string): void {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${action}\n`;

  // Ensure the 'data' directory exists
  const logDir = path.dirname(logFilePath);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  fs.appendFileSync(logFilePath, logMessage, "utf8");
  console.log(`Logged action: ${action}`);
}

export default { logAction };
