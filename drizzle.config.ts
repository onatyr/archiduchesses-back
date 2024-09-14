import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './verdiApp/database/schema.ts',
    out: './verdiApp/database/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DB_URL
    },
});