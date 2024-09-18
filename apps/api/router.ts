import express from "express";
import {testController} from "./test.controller";
import {plantController} from "./controllers/plant/plantController";
import {authController} from "./controllers/auth/auth.controller";

export const router: express.Router = express.Router();

router.use("/hey", testController);

router.use("/auth", authController)

router.use("/plant", plantController);

