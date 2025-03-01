import express from 'express';
import { eq } from 'drizzle-orm';
import { db } from '@api/database/database';
import { places, users } from '@api/database/schema';

export const usersController: express.Router = express();

usersController.get('/rooms', async (req, res) => {
  try {
    const userRooms = await db
      .select()
      .from(places)
      .where(eq(places.userId, req.userId))
      .execute();
    res.status(200).json(userRooms);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

usersController.get('/:id/name', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1)
      .execute();

    if (!user[0]) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user[0].name);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
