"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const postgres_1 = __importDefault(require("postgres"));
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
const postgres_js_1 = require("drizzle-orm/postgres-js");
const migrationClient = (0, postgres_1.default)(process.env.DB_URL, { max: 1 });
const db = (0, postgres_js_1.drizzle)(migrationClient);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Migrating database...");
    yield (0, migrator_1.migrate)(db, { migrationsFolder: "./verdiApp/database/migrations" });
    yield migrationClient.end();
    console.log("Database migrated successfully!");
});
main();
