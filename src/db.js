import { createPool } from 'mysql2/promise'
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT

} from './config.js'

// createConection() is used to create a single connection
// createPool() is used to create a pool of connections - diferentes hilos de conexion

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME
})

// createPool() returns a pool object
// The pool object can be used to query the database
