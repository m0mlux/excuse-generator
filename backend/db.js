const Database = require("better-sqlite3");
const db = new Database("excuses.db");
const fs = require("fs");
const initScript = fs.readFileSync("./scripts/init.sql", "utf8");

db.exec(initScript);

module.exports = db;