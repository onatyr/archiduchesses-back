import { plants, tasks } from "../../database/schema";
import { and, eq } from "drizzle-orm";
import { getAllPlantsByUserId } from "../plants/plants.query";

export async function getAllTasksWithPlant(userId: string) {
    return getAllPlantsByUserId(userId)
        .rightJoin(tasks, and(
            eq(tasks.plantId, plants.id),
            eq(tasks.done, false))
        )
        .$dynamic()
}