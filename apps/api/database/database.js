"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.pool = void 0;
const pg_1 = require("pg");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../../.env'),
});
if (!process.env.DB_URL) {
    throw new Error('DB_URL is not defined. Check your .env file or dotenv path.');
}
exports.pool = new pg_1.Pool({
    connectionString: process.env.DB_URL,
});
exports.db = (0, node_postgres_1.drizzle)(exports.pool);
