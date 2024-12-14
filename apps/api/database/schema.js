"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = exports.placesRelations = exports.places = exports.tasks = exports.plants = exports.usersToPlacesRelations = exports.usersToPlaces = exports.usersRelations = exports.users = exports.taskTypeEnum = exports.locationEnum = exports.sunlightEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.sunlightEnum = (0, pg_core_1.pgEnum)('sunlight', [
    'Low Light',
    'Partial Shade',
    'Bright Indirect Light',
    'Full Sun',
]);
exports.locationEnum = (0, pg_core_1.pgEnum)('location', ['INTERIOR', 'EXTERIOR']);
exports.taskTypeEnum = (0, pg_core_1.pgEnum)('task_type', ['watering']);
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
    email: (0, pg_core_1.varchar)('email', { length: 256 }).notNull(),
    password: (0, pg_core_1.varchar)('password', { length: 256 }).notNull(),
    creationDate: (0, pg_core_1.timestamp)('creation_date').defaultNow().notNull(),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    usersToPlaces: many(exports.usersToPlaces),
}));
exports.usersToPlaces = (0, pg_core_1.pgTable)('users_to_places', {
    userId: (0, pg_core_1.uuid)('user_id')
        .notNull()
        .references(() => exports.users.id),
    placeId: (0, pg_core_1.uuid)('place_id')
        .notNull()
        .references(() => exports.places.id),
}, (t) => ({
    pk: (0, pg_core_1.primaryKey)({ columns: [t.userId, t.placeId] }),
}));
exports.usersToPlacesRelations = (0, drizzle_orm_1.relations)(exports.usersToPlaces, ({ one }) => ({
    places: one(exports.places, {
        fields: [exports.usersToPlaces.placeId],
        references: [exports.places.id],
    }),
    user: one(exports.users, {
        fields: [exports.usersToPlaces.userId],
        references: [exports.users.id],
    }),
}));
exports.plants = (0, pg_core_1.pgTable)('plants', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    userId: (0, pg_core_1.uuid)('user_id')
        .references(() => exports.users.id)
        .notNull(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
    sunlight: (0, exports.sunlightEnum)('sunlight'),
    wateringRecurrenceDays: (0, pg_core_1.integer)('wateringRecurrenceDays'),
    adoptionDate: (0, pg_core_1.timestamp)('adoption_date').defaultNow(),
    roomId: (0, pg_core_1.uuid)('room_id').references(() => exports.rooms.id),
    imageUrl: (0, pg_core_1.varchar)('image_url'),
});
exports.tasks = (0, pg_core_1.pgTable)('tasks', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    plantId: (0, pg_core_1.uuid)('plant_id')
        .references(() => exports.plants.id)
        .notNull(),
    type: (0, exports.taskTypeEnum)('task_type').notNull(),
    dueDate: (0, pg_core_1.timestamp)('due_date'),
    done: (0, pg_core_1.boolean)('done').default(false).notNull()
});
exports.places = (0, pg_core_1.pgTable)('places', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    label: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
    userId: (0, pg_core_1.uuid)('user_id')
        .references(() => exports.users.id)
        .notNull(),
});
exports.placesRelations = (0, drizzle_orm_1.relations)(exports.places, ({ many }) => ({
    usersToPlaces: many(exports.usersToPlaces),
}));
exports.rooms = (0, pg_core_1.pgTable)('rooms', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    label: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
    placeId: (0, pg_core_1.uuid)('place_id')
        .references(() => exports.places.id)
        .notNull(),
    location: (0, exports.locationEnum)('location')
});
