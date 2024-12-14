"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.plantsController = void 0;
const express_1 = __importDefault(require("express"));
const drizzle_orm_1 = require("drizzle-orm");
const multer_1 = __importDefault(require("multer"));
const fs = __importStar(require("node:fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const node_process_1 = __importDefault(require("node:process"));
const plants_util_1 = require("./plants.util");
const plants_query_1 = require("./plants.query");
const schema_1 = require("@api/database/schema");
const plantbook_service_1 = require("@shared/services/plantbook.service");
const database_1 = require("@api/database/database");
const plantnet_service_1 = require("@api/lib/plantnet/plantnet.service");
const tasks_query_1 = require("@api/controllers/tasks/tasks.query");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../../../.env'),
});
exports.plantsController = (0, express_1.default)();
exports.plantsController.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPlants = (0, plants_util_1.formatPlantsWithTasks)(yield (0, plants_query_1.getAllPlantsWithTask)(req.userId));
        res.status(200).json(allPlants);
    }
    catch (e) {
        console.error(e instanceof Error ? e.message : e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));
// Add a new plants
exports.plantsController.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { name, sunlight, wateringRecurrenceDays, adoptionDate, imageUrl, roomId } = req.body;
        const [newPlant] = yield database_1.db.insert(schema_1.plants).values({
            userId,
            name,
            sunlight,
            wateringRecurrenceDays,
            adoptionDate,
            roomId: '3',
            imageUrl,
        }).returning({ id: schema_1.plants.id });
        const [nextWateringTask] = yield (0, tasks_query_1.insertWateringTask)(newPlant.id, computeNextOccurrence(wateringRecurrenceDays));
        if (!newPlant) {
            return res.status(500).json({ message: 'Failed to add the plants' });
        }
        res
            .status(201)
            .json({ message: 'Plant added successfully', plant: newPlant });
    }
    catch (e) {
        console.error(e instanceof Error ? e.message : e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));
// Delete plants
exports.plantsController.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedPlant = yield database_1.db.delete(schema_1.plants).where((0, drizzle_orm_1.eq)(schema_1.plants.id, id));
        if (!deletedPlant) {
            return res.status(500).json({ message: 'Failed to delete plants' });
        }
        res.status(200).json({
            message: `Plant with ID ${id} deleted successfully`,
        });
    }
    catch (e) {
        console.error(e instanceof Error ? e.message : e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));
exports.plantsController.get('/searchExternalPlantByName/:name', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.name.length < 3)
        return res.status(500).json({ message: "Query should contains 3 characters minimum" });
    const plantBookResult = yield new plantbook_service_1.PlantBookService(node_process_1.default.env.VITE_PLANTBOOK_API_KEY).searchPlantByName(req.params.name);
    res.status(200).json(plantBookResult);
}));
const upload = (0, multer_1.default)({ dest: 'plantIdentification/' });
exports.plantsController.post('/identify', upload.single('files'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).send('Please attach a file with the request');
        }
        if (!(req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png')) {
            return res.status(400).send('Unsupported file type. Only JPEG and PNG are allowed');
        }
        const formData = new FormData();
        const imageBlob = new Blob([fs.readFileSync(req.file.path)]);
        formData.append('images', imageBlob);
        const identificationResponse = yield new plantnet_service_1.PlantNetService().identifyPlant(formData);
        const plantBookService = new plantbook_service_1.PlantBookService(node_process_1.default.env.VITE_PLANTBOOK_API_KEY);
        const plantNetIdentifications = yield Promise.all(identificationResponse.map((result) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const plantbookPid = (_a = ((yield plantBookService.searchPlantByName(result.plantnetName)).at(0))) === null || _a === void 0 ? void 0 : _a.pid;
            return [Object.assign(Object.assign({}, result), { plantbookDetails: plantbookPid ? yield plantBookService.getPlantDetails(plantbookPid) : null })];
        })));
        res.status(200).json(plantNetIdentifications);
    }
    catch (e) {
        console.error(e instanceof Error ? e.message : e);
        res.status(500);
    }
    finally {
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
    }
}));
