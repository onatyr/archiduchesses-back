import express from "express";
import {db} from "../database/database";
import {plants} from "../database/schema";

export const plantController: express.Router = express();

plantController.get("/all", async (req, res) => {
    console.log(await db.select().from(plants));
    console.log("toutes les plantes")
    res.status(200).json()
});