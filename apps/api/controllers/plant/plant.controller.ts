import express from 'express';
import { getAllPlantsByUserId } from './plant.query';
import { db } from '../../database/database'; // Make sure this path is correct
import { plants } from '../../database/schema'; // Adjust the import path as needed
import { eq } from 'drizzle-orm';
import { PlantNetService } from "../../lib/plantnet/plantnet.service";
import multer from "multer";
import * as fs from "node:fs";

export const plantController: express.Router = express();

const upload = multer({ dest: 'plantIdentification/' });
plantController.post('/identify', upload.single('files'), async (req, res, next)  => {
  try {
    if (!req.file) {
      return res.status(400).send('Please attache a file with the request')
    }

    if (!(req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png')) {
      return res.status(400).send('Unsupported file type. Only JPEG and PNG are allowed');
    }

    const formData = new FormData()
    const imageBlob = new Blob([fs.readFileSync(req.file.path)]);
    formData.append('images', imageBlob)
    const identificationResponse = await new PlantNetService().identifyPlant(formData)

    res.status(200).json(identificationResponse)
  }
  catch (e) {
    console.log(e)
  }
  finally {
    if (req.file) {
      fs.unlinkSync(req.file.path)
    }
  }
})

plantController.get('/all', async (req, res) => {
  const allPlants = await getAllPlantsByUserId(req.userId).execute();
  res.status(200).json(allPlants);
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
  } catch (error) {
    console.error('Error adding plant:', error);
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
  } catch (error) {
    console.error('Error deleting plant:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
