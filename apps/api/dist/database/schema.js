"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUser = exports.plants = exports.wateringEnum = exports.sunlightEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.sunlightEnum = (0, pg_core_1.pgEnum)('sunlight', ['LOW', 'MEDIUM', 'HIGH']);
exports.wateringEnum = (0, pg_core_1.pgEnum)('watering', ['LOW', 'MEDIUM', 'HIGH']);
exports.plants = (0, pg_core_1.pgTable)('plants', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }),
    type: (0, pg_core_1.varchar)('type', { length: 256 }),
    sunlight: (0, exports.sunlightEnum)('sunlight'),
    watering: (0, exports.wateringEnum)('watering')
});
exports.testUser = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 256 })
});
