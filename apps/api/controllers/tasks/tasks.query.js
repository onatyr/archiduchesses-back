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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasksWithPlant = getAllTasksWithPlant;
exports.insertWateringTask = insertWateringTask;
const schema_1 = require("@api/database/schema");
const drizzle_orm_1 = require("drizzle-orm");
const database_1 = require("@api/database/database");
const plants_query_1 = require("@api/controllers/plants/plants.query");
function getAllTasksWithPlant(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, plants_query_1.getAllPlantsByUserId)(userId)
            .rightJoin(schema_1.tasks, (0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.tasks.plantId, schema_1.plants.id), (0, drizzle_orm_1.eq)(schema_1.tasks.done, false)))
            .$dynamic();
    });
}
function insertWateringTask(plantId, dueDate) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_1.db.insert(schema_1.tasks).values({
            plantId: plantId,
            type: 'watering',
            dueDate: dueDate
        }).returning({ id: schema_1.tasks.id });
    });
}
