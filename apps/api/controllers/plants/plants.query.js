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
exports.getAllPlantsByUserId = getAllPlantsByUserId;
exports.getAllPlantsWithTask = getAllPlantsWithTask;
const database_1 = require("@api/database/database");
const schema_1 = require("@api/database/schema");
const drizzle_orm_1 = require("drizzle-orm");
function getAllPlantsByUserId(userId) {
    return database_1.db.select()
        .from(schema_1.plants)
        .where((0, drizzle_orm_1.eq)(schema_1.plants.userId, userId))
        .$dynamic();
}
function getAllPlantsWithTask(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return getAllPlantsByUserId(userId)
            .leftJoin(schema_1.tasks, (0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.tasks.plantId, schema_1.plants.id), (0, drizzle_orm_1.eq)(schema_1.tasks.done, false)))
            .$dynamic();
    });
}
