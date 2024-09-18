import express from "express";
import {testController} from "./test.controller";
import {plantController} from "./plant.controller";

export const router: express.Router = express.Router();

router.use("/hey", testController);

router.use("/plant", plantController);