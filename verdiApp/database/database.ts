import {Pool} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
});

const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log(client)
        const res = await client.query('SELECT NOW()');
        console.log('Connection successful:', res.rows);
        client.release();
    } catch (error) {
        console.error('Connection failed:', error);
    }
};

testConnection();

export const db = drizzle(pool);