const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  password: "Tabish776",
  host: "localhost",
  port: 5432,
  database: "Todo"
});

module.exports = pool;
