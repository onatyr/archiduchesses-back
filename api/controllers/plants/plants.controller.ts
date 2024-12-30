import { eq } from 'drizzle-orm';
import multer from 'multer';
import * as fs from 'node:fs';
import dotenv from 'dotenv';
import path from 'path';
import process from 'node:process';
import { formatPlantsWithTasks } from '@api/controllers/plants/plants.util';
import { getAllPlantsWithTask } from '@api/controllers/plants/plants.query';
import { db } from '@api/database/database';
import { plants } from '@api/database/schema';
import { insertNewTaskTask } from '@api/controllers/tasks/tasks.query';
import { computeNextOccurrence } from '@api/controllers/tasks/tasks.util';
import { PlantBookService } from '@lib/services/plantbook.service';
import { PlantNetService } from '@lib/plantnet/plantnet.service';
import express from 'express';

dotenv.config({
  path: path.resolve(__dirname, '../../../../.env'),
});

export const plantsController: express.Router = express();

plantsController.get('/all', async (req, res) => {
  try {
    const allPlants = formatPlantsWithTasks(
     await getAllPlantsWithTask(req.userId)
    );
    res.status(200).json(allPlants);
  } catch (e) {
    console.error(e);
    res.status(500).json({message: 'Internal Server Error'});
  }
});

plantsController.post('/add', async (req, res) => {
  try {
    const userId = req.userId;
    const {
      name,
      sunlight,
      wateringRecurrenceDays,
      adoptionDate,
      imageUrl,
      roomId,
    } = req.body;

    const [newPlant] = await db
     .insert(plants)
     .values({
       userId,
       name,
       sunlight,
       wateringRecurrenceDays,
       adoptionDate: adoptionDate,
       roomId,
       imageUrl,
     })
     .returning({id: plants.id});

    if (wateringRecurrenceDays) {
      const [nextWateringTask] = await insertNewTaskTask(
       newPlant.id,
       'watering',
       computeNextOccurrence(wateringRecurrenceDays)
      );
      if (!nextWateringTask) {
        return res.status(500).json({message: 'Failed to add the plants'});
      }
    }

    if (!newPlant) {
      return res.status(500).json({message: 'Failed to add the plants'});
    }

    res
     .status(201)
     .json({message: 'Plant added successfully', plant: newPlant});
  } catch (e) {
    console.log(e);
    console.error(e);
    res.status(500).json({message: 'Internal Server Error'});
  }
});

plantsController.delete('/delete/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const deletedPlant = await db.delete(plants).where(eq(plants.id, id));

    if (!deletedPlant) {
      return res.status(500).json({message: 'Failed to delete plants'});
    }

    res.status(200).json({
      message: `Plant with ID ${id} deleted successfully`,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({message: 'Internal Server Error'});
  }
});

plantsController.get(
 '/searchExternalPlantByName/:name',
 async (req, res, next) => {
   if (req.params.name.length < 3)
     return res
      .status(500)
      .json({message: 'Query should contains 3 characters minimum'});
   const plantbookEntities = await new PlantBookService(
    process.env.VITE_PLANTBOOK_API_KEY
   ).searchPlantByName(req.params.name);
   res.status(200).json(plantbookEntities);
 }
);

const upload = multer({dest: 'plantIdentification/'});
plantsController.post(
 '/identify',
 upload.single('files'),
 async (req, res, next) => {
   try {
     if (!req.file) {
       return res.status(400).send('Please attach a file with the request');
     }

     if (
      !(
       req.file.mimetype === 'image/jpeg' ||
       req.file.mimetype === 'image/png'
      )
     ) {
       return res
        .status(400)
        .send('Unsupported file type. Only JPEG and PNG are allowed');
     }

     const formData = new FormData();
     const imageBlob = new Blob([fs.readFileSync(req.file.path)]);
     formData.append('images', imageBlob);
     const identificationResponse = await new PlantNetService().identifyPlant(
      formData
     );

     const plantBookService = new PlantBookService(
      process.env.VITE_PLANTBOOK_API_KEY
     );
     const plantNetIdentifications = await Promise.all(
      identificationResponse.map(async (result) => {
        const plantbookPid = (
         await plantBookService.searchPlantByName(result.plantnetName)
        ).at(0)?.pid;
        return {
          ...result,
          plantbookDetailsDto: plantbookPid
           ? await plantBookService.getPlantDetails(plantbookPid)
           : null,
        };
      })
     );

     res.status(200).json(plantNetIdentifications);
   } catch (e) {
     console.error(e);
     res.status(500);
   } finally {
     if (req.file) {
       fs.unlinkSync(req.file.path);
     }
   }
 }
);
