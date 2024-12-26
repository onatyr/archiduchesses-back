import { and, eq } from 'drizzle-orm';
import { getAllPlantsByUserId } from "@api/controllers/plants/plants.query";
import { plants, tasks, taskType } from "@api/database/schema";
import { db } from "@api/database/database";

export async function getAllTasksWithPlant(userId: string) {
  return getAllPlantsByUserId(userId)
   .rightJoin(tasks, and(eq(tasks.plantId, plants.id), eq(tasks.done, false)))
   .$dynamic();
}

export async function insertNewTaskTask(
 plantId: string,
 type: taskType,
 dueDate: Date
) {
  return db
   .insert(tasks)
   .values({
     plantId,
     type,
     dueDate: new Date(dueDate.toISOString().split('T')[0]),
   })
   .returning({id: tasks.id});
}
