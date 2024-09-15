import express from "express";
import {db} from "../database/database";
import {plants} from "../database/schema";

export const plantController: express.Router = express();

plantController.get("/all", async (req, res) => {
    console.log("toutes les plantes")
    try {
        let allPlants = await db.select().from(plants).execute()
    console.log(allPlants);

    } catch (e) {
        console.log("hey")
    }
    res.status(200).json()
});

plantController.post("/new", async (req, res) => {

})