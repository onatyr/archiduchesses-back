import express from 'express';
import { plantController } from './controllers/plant/plant.controller';
import { authController } from './controllers/auth/auth.controller';
import { userController } from './controllers/user/user.controller';
import { placeController } from "./controllers/places/place.controller";

export const router: express.Router = express.Router();

router.use('/auth', authController);
router.use('/user', userController);
router.use('/plant', plantController);
router.use('/place', placeController)