import express from 'express';
import { getAllPlantsByUserId } from './plant.query';
import { db } from '../../database/database';
import { plants } from '../../database/schema';
import { eq } from 'drizzle-orm';

export const plantController: express.Router = express();

plantController.get('/all', async (req, res) => {
  try {
    const allPlants = await getAllPlantsByUserId(req.userId).execute();
    res.status(200).json(allPlants);
  } catch (e) {
    res.status(500).json({ message: e })
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
