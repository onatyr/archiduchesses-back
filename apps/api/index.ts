import express from "express";
import cors from "cors";
import * as http from "http";
import {router} from "./router";
import {authenticate} from "./middlewares/auth.middleware";

const app = express.Router();

const PORT = 3000;

// Middleware
app.use(express.json({limit: "50mb"}));
app.use(cors());
app.use(authenticate)

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
