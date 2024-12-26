import { InferSelectModel } from 'drizzle-orm';
import { PlantsWithTaskResult } from "@api/controllers/plants/plants.query";
import { plants } from "@api/database/schema";

export function formatPlantsWithTasks(plantsWithTask: PlantsWithTaskResult) {
  return plantsWithTask.reduce(
   (acc, row) => {
     const plant = acc.find((p) => p.id === row.plants.id);

     if (plant) {
       if (row.tasks) {
         plant.tasks.push({
           taskId: row.tasks.id,
           dueDate: row.tasks.dueDate,
         });
       }
     } else {
       acc.push({
         ...row.plants,
         tasks: row.tasks
          ? [
            {
              taskId: row.tasks.id,
              dueDate: row.tasks.dueDate,
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
       taskId: string;
       dueDate: Date | null;
     }>;
   }
   >
  );
}
