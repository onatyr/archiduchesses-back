import express from "express";
import {testController} from "./testController";

export const router: express.Router = express.Router();

router.use("/hey", testController);