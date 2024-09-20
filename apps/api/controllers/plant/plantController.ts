import express from "express";
import {db} from "../../database/database";
import {plants} from "../../database/schema";
import {Plant} from '@shared/models/plant.model';
import {eq, ilike} from "drizzle-orm";

export const plantController: express.Router = express();

plantController.get("/all", async (req, res) => {
    const allPlants = await db.select().from(plants)
        .where(eq(plants.userId, req.userId))
        .execute();
    res.status(200).json(allPlants);
});

plantController.get("/searchByName", async (req: express.Request<unknown, unknown, unknown, {
    name: string
}>, res) => {
    const result = await db.select().from(plants)
        .where(ilike(plants.name, `%${req.query.name}%`))
        .execute()
    res.status(200).json(result)
})

plantController.post("/new", async (req: express.Request<unknown, unknown, Plant>, res) => {
    const plant = await db.insert(plants).values({
        userId: req.userId,
        name: req.body.name,
        family: req.body.family,
        sunlight: req.body.sunlight,
        watering: req.body.watering,
        adoptionDate: req.body.adoptionDate
    });

    if (!plant) return res.status(500).json()

    res.status(201).json()
})