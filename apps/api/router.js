"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const plants_controller_1 = require("./controllers/plants/plants.controller");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const users_controller_1 = require("./controllers/users/users.controller");
const places_controller_1 = require("./controllers/places/places.controller");
const tasks_controller_1 = require("./controllers/tasks/tasks.controller");
exports.router = express_1.default.Router();
exports.router.use('/auth', auth_controller_1.authController);
exports.router.use('/users', users_controller_1.usersController);
exports.router.use('/plants', plants_controller_1.plantsController);
exports.router.use('/places', places_controller_1.placesController);
exports.router.use('/tasks', tasks_controller_1.tasksController);
