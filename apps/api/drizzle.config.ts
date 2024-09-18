import * as dotenv from 'dotenv';

dotenv.config();

export default {
    schema: './database/schema.ts',
    out: './database/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DB_URL,
    },
};