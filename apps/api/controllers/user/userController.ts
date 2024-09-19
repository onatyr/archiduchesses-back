import express from "express";
import {db} from "../../database/database";
import {places} from "../../database/schema";
import {eq} from "drizzle-orm";

export const userSettingsController: express.Router = express();

userSettingsController.get("/rooms", async (req: express.Request<unknown, unknown, {
    userId: string,
}>,  res) => {
    const userRooms = await db
        .select()
        .from(places)
        .where(
            eq(places.userId, req.body.userId),
        )
        .execute();
    res.status(200).json(userRooms);
});

