import express from "express";
import fs from "fs";
import * as http from "http";
import path from "path";

import {
    errorLogger,
    requestLogger
} from "@api/src/app/middlewares/logger.middleware";
import { documentationController } from "@api/src/docs/documentation.controller";
import {
    env,
} from "@unico/config/env";

import { authorizationMiddleware } from "./app/middlewares/authorization.middleware";
import { handleError } from "./app/middlewares/error.middleware";
import { router } from "./app/router";

const PUBLIC_PATH = path.join(__dirname, "./public");
if (!fs.existsSync(PUBLIC_PATH)) fs.mkdirSync(PUBLIC_PATH);
// This is required for express to serialize queryRaw results (this is prototype pollution don't repeat unless necessary)

const app = express.Router();

const PORT = env.ENVIRONMENT === "local" ? 3000 : 5555;

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Docs
app.use("/doc", documentationController);

app.use(authorizationMiddleware);
app.use(requestLogger);
// Static
app.use("/public", express.static(PUBLIC_PATH));

// Controllers
app.use(router);

// Error handling
app.use(errorLogger);
app.use(handleError);

// Start the server
const server = http.createServer(
    express().use(app)
);
server.listen(PORT, () => {
    console.log("HTTP Server listening at port : " + PORT);
});

// Ensure graceful exit
exitHook((done) => {
    server.close(error => {
        if (error)
            throw error;
        done();
    });
});
