import express from "express";
import {db} from "../database/database";
import {plants} from "../database/schema";
import {Plant} from "./lib/plant.model";

export const plantController: express.Router = express();

plantController.get("/all", async (req, res) => {
    const allPlants = await db.select().from(plants).execute()
    console.log(allPlants);
    res.status(200).json()
});

plantController.post("/new", async (req: express.Request<unknown, unknown, Plant>, res) => {
    const plant = await db.insert(plants).values({
        name: req.body.name,
        type: req.body.type,
        sunlight: req.body.sunlight,
        watering: req.body.watering
    });
    console.log(plant)
    res.status(201).json()
})