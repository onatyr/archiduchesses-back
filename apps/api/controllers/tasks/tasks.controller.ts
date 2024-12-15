import express from "express";
import { getAllTasksWithPlant, insertNewTaskTask } from "./tasks.query";
import { db } from "@api/database/database";
import { tasks } from "@api/database/schema";
import { eq } from "drizzle-orm";
import { getPlantById } from "@api/controllers/plants/plants.query";
import { computeNextOccurrence } from "@api/controllers/tasks/tasks.util";

export const tasksController: express.Router = express();

tasksController.get('/all', async (req, res, next) => {
  try {
    const allTasks = await getAllTasksWithPlant(req.userId)
    res.status(200).json(allTasks)
  } catch (e) {
    console.error(e);
    res.status(500).json({message: 'Internal Server Error'});
  }
})

tasksController.put('/complete/:id', async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const [completedTask] = await db.update(tasks)
     .set({done: true})
     .where(eq(tasks.id, taskId))
     .returning({plantId: tasks.plantId, type: tasks.type})

    if (!completedTask) {
      return res.status(500).json({message: 'Failed to complete the task'});
    }

    const [plant] = await getPlantById(completedTask.plantId).execute()
    if (plant.wateringRecurrenceDays) {
      await insertNewTaskTask(plant.id, 'watering', computeNextOccurrence(plant.wateringRecurrenceDays))
    }

    res.status(200).json({message: "Task completed"})

  } catch (e) {
    console.error(e);
    res.status(500).json({message: 'Internal Server Error'});
  }
})