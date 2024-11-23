import express from 'express';
import { getAllPlantsByUserId } from './plant.query';
import { db } from '../../database/database';
import { plants } from '../../database/schema';
import { eq } from 'drizzle-orm';
import { PlantNetService } from "../../lib/plantnet/plantnet.service";
import multer from "multer";
import * as fs from "node:fs";
import {PlantBookService} from "../../lib/plantbook/plantbook.service";

export const plantController: express.Router = express();

plantController.get('/all', async (req, res) => {
  try {
    const allPlants = await getAllPlantsByUserId(req.userId).execute();
    res.status(200).json(allPlants);
  }
  catch (e) {
    if (e instanceof Error) console.error(e.message)
    else console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
});

// Add a new plant
plantController.post('/add', async (req, res) => {
  try {
    const { userId, name, sunlight, watering, adoptionDate, imageUrl } =
      req.body;

    const newPlant = await db.insert(plants).values({
      userId,
      name,
      sunlight,
      watering,
      adoptionDate,
      imageUrl,
    });

    if (!newPlant) {
      return res.status(500).json({ message: 'Failed to add the plant' });
    }

    res
      .status(201)
      .json({ message: 'Plant added successfully', plant: newPlant });
  } catch (e) {
    if (e instanceof Error) console.error('Error adding plant:', e.message);
    else console.error('Error adding plant:', e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete plant
plantController.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlant = await db.delete(plants).where(eq(plants.id, id));

    if (!deletedPlant) {
      return res.status(500).json({ message: 'Failed to delete plant' });
    }

    res.status(200).json({
      message: `Plant with ID ${id} deleted successfully`,
    });
  } catch (e) {

    if (e instanceof Error) console.error('Error deleting plant:', e);
    else console.error('Error deleting plant:', e)
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const upload = multer({ dest: 'plantIdentification/' });
plantController.post('/identify', upload.single('files'), async (req, res, next)  => {
  try {
    if (!req.file) {
      return res.status(400).send('Please attach a file with the request')
    }

    if (!(req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png')) {
      return res.status(400).send('Unsupported file type. Only JPEG and PNG are allowed');
    }

    const formData = new FormData()
    const imageBlob = new Blob([fs.readFileSync(req.file.path)]);
    formData.append('images', imageBlob)
    const identificationResponse = await new PlantNetService().identifyPlant(formData)

    const plantBookService = new PlantBookService()
    const plantNetIdentifications = await Promise.all(
        identificationResponse.map(async (result) => {
          const plantbookPid = (await plantBookService.searchPlantByName(result.plantnetName)).at(0)
          return [{
            ...result,
            plantbookDetails: plantbookPid ? await plantBookService.getPlantDetails(plantbookPid) : null
          }]
        })
    );

    res.status(200).json(plantNetIdentifications)
  }
  catch (e) {
    if (e instanceof Error) console.error(e.message)
    else console.error(e)
    res.status(500)
  }
  finally {
    if (req.file) {
      fs.unlinkSync(req.file.path)
    }
  }
})
