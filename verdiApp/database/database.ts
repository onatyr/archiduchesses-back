import {Pool} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";
import dotenv from "dotenv";

dotenv.config()

export const pool = new Pool({
    connectionString: process.env.DB_URL
});

export const db = drizzle(pool);