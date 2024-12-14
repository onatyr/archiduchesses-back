"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPlacesByUserId = getAllPlacesByUserId;
const database_1 = require("../../database/database");
const schema_1 = require("../../database/schema");
const drizzle_orm_1 = require("drizzle-orm");
function getAllPlacesByUserId(userId) {
    return database_1.db.select()
        .from(schema_1.places)
        .where((0, drizzle_orm_1.inArray)(schema_1.places.id, database_1.db.select({
        placeId: schema_1.usersToPlaces.placeId
    })
        .from(schema_1.usersToPlaces)
        .where((0, drizzle_orm_1.eq)(schema_1.usersToPlaces.userId, userId))
        .$dynamic()))
        .$dynamic();
}
