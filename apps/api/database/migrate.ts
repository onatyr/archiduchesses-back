import postgres from "postgres";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import {drizzle} from "drizzle-orm/postgres-js";
import * as dotenv from 'dotenv';
import path from 'path';
import process from "node:process";

dotenv.config({
    path: path.resolve(__dirname, '../../../.env') 
});
if (!process.env.DB_URL) {
    throw new Error("DB_URL is not defined. Check your .env file or dotenv path.");
}

const migrationClient = postgres(process.env.DB_URL, { max: 1 });
const db = drizzle(migrationClient)

const main = async () => {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: path.resolve(__dirname, './migrations')  });
    await migrationClient.end();
    console.log("Database migrated successfully!");
};

main();

