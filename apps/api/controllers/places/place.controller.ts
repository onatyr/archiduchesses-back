import express from "express";
import {getAllPlacesByUserId} from "./place.query";
import {db} from "../../database/database";
import {rooms} from '../../database/schema';
import {eq} from "drizzle-orm";

export const placeController: express.Router = express();

placeController.get('/all', async (req, res, next) => {
    try {
        const places = await getAllPlacesByUserId(req.userId).execute()
        res.status(200).json(places)
    } catch (e) {
        res.status(500).json({message: e})
    }
})

placeController.get('/allRoomsByPlaceId/:placeId', async (req, res, next) => {
    try {
        const hasAccess = !!(await getAllPlacesByUserId(req.userId).execute()).find((place) => place.id === req.params.placeId)

        if (!hasAccess) {
            res.status(500).json({message: "No room found"})
            return
        }
        const allRooms = await db.select()
            .from(rooms)
            .where(eq(rooms.placeId, req.params.placeId))
            .execute()

        res.status(200).json(allRooms)
    } catch (e) {
        res.status(500).json({message: e})
    }
})