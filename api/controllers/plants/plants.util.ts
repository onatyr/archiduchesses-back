import { InferSelectModel } from 'drizzle-orm';
import { PlantsWithTaskResult } from '@api/controllers/plants/plants.query';
import { plants, taskType } from '@api/database/schema';

export type PlantsWithTasksFormatted = Array<
  InferSelectModel<typeof plants> & {
    tasks: Array<{
      id: string;
      plantId: string;
      type: taskType;
      dueDate: Date | null;
      done: boolean;
    }>;
  }
>;

export function formatPlantsWithTasks(plantsWithTask: PlantsWithTaskResult) {
  return plantsWithTask.reduce((formattedResult, resultEntry) => {
    const formattedPlant = formattedResult.find(
      (plant) => plant.id === resultEntry.plants.id
    );

    if (formattedPlant) {
      if (
        resultEntry.tasks &&
        !formattedPlant.tasks.find((task) => task.id === resultEntry.tasks?.id)
      ) {
        formattedPlant.tasks.push({
          id: resultEntry.tasks.id,
          plantId: resultEntry.tasks.plantId,
          type: resultEntry.tasks.type,
          dueDate: resultEntry.tasks.dueDate,
          done: resultEntry.tasks.done,
        });
      }
    } else {
      formattedResult.push({
        ...resultEntry.plants,
        tasks: resultEntry.tasks
          ? [
              {
                id: resultEntry.tasks.id,
                plantId: resultEntry.tasks.plantId,
                type: resultEntry.tasks.type,
                dueDate: resultEntry.tasks.dueDate,
                done: resultEntry.tasks.done,
              },
            ]
          : [],
      });
    }

    return formattedResult;
  }, [] as PlantsWithTasksFormatted);
}
