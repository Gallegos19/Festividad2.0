import { createConnection } from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const database = createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: 3306
});

export default database.promise()