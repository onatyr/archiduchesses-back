import { db } from '@api/database/database';
import { plants, tasks } from '@api/database/schema';
import { and, eq } from 'drizzle-orm';

export function getAllPlantsByUserId(userId: string) {
  return db.select()
   .from(plants)
   .where(eq(plants.userId, userId))
   .$dynamic();
}

export function getPlantById(id: string) {
  return db.select()
   .from(plants)
   .where(eq(plants.id, id))
   .limit(1)
   .$dynamic()
}

export type PlantsWithTaskResult = Awaited<ReturnType<typeof getAllPlantsWithTask>>

export async function getAllPlantsWithTask(userId: string) {
  return getAllPlantsByUserId(userId)
   .leftJoin(tasks, and(
    eq(tasks.plantId, plants.id),
    eq(tasks.done, false))
   )
   .$dynamic()
}