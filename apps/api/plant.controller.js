"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantController = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const schema_1 = require("./database/schema");
exports.plantController = (0, express_1.default)();
exports.plantController.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPlants = yield database_1.db.select().from(schema_1.plants).execute();
    console.log(allPlants);
    res.status(200).json();
}));
exports.plantController.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plant = yield database_1.db.insert(schema_1.plants).values({
        name: req.body.name,
        type: req.body.type,
        sunlight: req.body.sunlight,
        watering: req.body.watering
    });
    console.log(plant);
    res.status(201).json();
}));
