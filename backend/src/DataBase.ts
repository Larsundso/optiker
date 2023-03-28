/* eslint-disable no-console */
import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Optiker',
  password: 'postgres',
  port: 5432,
});
pool.query('SELECT NOW() as now;', (err) => {
  if (err) {
    console.log("| Couldn't connect to DataBase", err.stack);
  } else {
    console.log('| Established Connection to DataBase');
  }
});
pool.connect((err) => {
  if (err) {
    console.log('Error while logging into DataBase', err.stack);
  }
});
pool.on('error', (err) => {
  console.log('Unexpected error on idle pool client', err);
});

export default pool;
