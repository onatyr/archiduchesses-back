import { InferSelectModel } from 'drizzle-orm';
import { PlantsWithTaskResult } from "@api/controllers/plants/plants.query";
import { plants, taskType } from "@api/database/schema";

export function formatPlantsWithTasks(plantsWithTask: PlantsWithTaskResult) {
  return plantsWithTask.reduce(
   (acc, row) => {
     const plant = acc.find((p) => p.id === row.plants.id);

     if (plant) {
       if (row.tasks) {
         plant.tasks.push({
           id: row.tasks.id,
           plantId: row.tasks.plantId,
           type: row.tasks.type,
           dueDate: row.tasks.dueDate,
           done: row.tasks.done
         });
       }
     } else {
       acc.push({
         ...row.plants,
         tasks: row.tasks
          ? [
            {
              id: row.tasks.id,
              plantId: row.tasks.plantId,
              type: row.tasks.type,
              dueDate: row.tasks.dueDate,
              done: row.tasks.done
            },
          ]
          : [],
       });
     }

     return acc;
   },
   [] as Array<
    InferSelectModel<typeof plants> & {
     tasks: Array<{
       id: string;
       plantId: string;
       type: taskType;
       dueDate: Date | null;
       done: boolean
     }>;
   }
   >
  );
}
