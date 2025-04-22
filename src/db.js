const { Pool, Client } = require('pg');

const connectionString = process.env.DATABASE_URL;
const pgPool = new Pool({ connectionString });

module.exports = { pgPool };
