import express from "express";
import {testController} from "./testController";
import {plantController} from "./plantController";

export const router: express.Router = express.Router();

router.use("/hey", testController);

router.use("/plant", plantController);