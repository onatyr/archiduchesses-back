"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const test_controller_1 = require("./test.controller");
const plant_controller_1 = require("./plant.controller");
exports.router = express_1.default.Router();
exports.router.use("/hey", test_controller_1.testController);
exports.router.use("/plant", plant_controller_1.plantController);
