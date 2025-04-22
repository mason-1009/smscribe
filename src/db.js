const { Pool, Client } = require('pg');

const connectionString = process.env.DATABASE_URL;
const pgPool = new Pool({
  connectionString,
  ssl: true
});

module.exports = { pgPool };
