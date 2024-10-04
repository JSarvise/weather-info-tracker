import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";

import path from "path";

async function initialize() {
  const db = await open({
    filename: path.join(__dirname, "../data/weather.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
      CREATE TABLE IF NOT EXISTS weather (
        city TEXT,
       temperature REAL,
       humidity REAL,
       timestamp TEXT
      )
    `);

  db.close();
}

async function openDB(): Promise<Database> {
  return await open({
    filename: path.join(__dirname, "../data/weather.db"),
    driver: sqlite3.Database,
  });
}

export { initialize, openDB };
