import express from 'express';
import { authController } from '@api/controllers/auth/auth.controller';
import { usersController } from '@api/controllers/users/users.controller';
import { plantsController } from '@api/controllers/plants/plants.controller';
import { placesController } from '@api/controllers/places/places.controller';
import { tasksController } from '@api/controllers/tasks/tasks.controller';

export const router: express.Router = express.Router();

router.use('/auth', authController);
router.use('/users', usersController);
router.use('/plants', plantsController);
router.use('/places', placesController);
router.use('/tasks', tasksController);
