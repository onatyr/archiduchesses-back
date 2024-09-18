import 'dotenv/config';
import postgres from "postgres";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import {drizzle} from "drizzle-orm/postgres-js";

const migrationClient = postgres(process.env.DB_URL, { max: 1 });
const db = drizzle(migrationClient)

const main = async () => {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: "./verdiApp/database/migrations" });
    await migrationClient.end();
    console.log("Database migrated successfully!");
};

main();

