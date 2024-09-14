import express from "express";
import cors from "cors";
import * as http from "http";
import {router} from "./router";
import {Pool} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";
import dotenv from 'dotenv';

dotenv.config()

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);  // Check the type and value
console.log('DB_PORT:', process.env.DB_PORT);

const app = express.Router();

const PORT = 3000;

// Middleware
app.use(express.json({limit: "50mb"}));
app.use(cors());

// Controllers
app.use(router);

// Start the server
const server = http.createServer(
    express().use(app)
);
server.listen(PORT, () => {
    console.log("HTTP Server listening at port : " + PORT);
});

// // Ensure graceful exit
// exitHook((done) => {
//     server.close(error => {
//         if (error)
//             throw error;
//         done();
//     });
// });
