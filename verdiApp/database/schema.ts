import {pgEnum, pgTable, serial, varchar} from 'drizzle-orm/pg-core';

export const sunlightEnum = pgEnum('sunlight', ['low', 'medium', 'high']);
export const wateringEnum = pgEnum('watering', ['low', 'medium', 'high']);

export const plants = pgTable('plants', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 256}),
    sunlight: sunlightEnum('sunlight'),
    watering: wateringEnum('watering')
});

export const testUser = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 256})
});