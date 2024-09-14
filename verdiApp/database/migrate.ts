import 'dotenv/config';
import postgres from "postgres";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import {db} from "./database";

const migrationClient = postgres(process.env.database, { max: 1 });

const main = async () => {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: "./verdiApp/database/migrations" });
    await migrationClient.end();
    console.log("Database migrated successfully!");
};

main();

