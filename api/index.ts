import express from 'express';
import cors from 'cors';
import * as http from 'http';
import axios from 'axios';
import { authenticate } from '@api/middlewares/auth.middleware';
import { log } from '@lib/utils/logs.util';
import { router } from '@api/router';

const app = express.Router();

export const plantBookAxiosInstance = axios.create();
export const plantNetAxiosInstance = axios.create();

const PORT = 3000

app.use(cors());
app.use(express.json({limit: '10mb'}));
app.use(authenticate);

// Controllers
app.use(router);
app.use((req, res, next) => {
  next();
});

const server = http.createServer(express().use(app));
server.listen(PORT, () => {
  log('HTTP Server listening at port : ' + PORT);
});