import mysql, { Connection } from 'mysql2';
import { ENV } from './Env';

const db: Connection = mysql.createConnection({
  host: ENV.host_db,
  user: ENV.user_db,
  password: ENV.password_db,
  database: ENV.name_db
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

export default db;
