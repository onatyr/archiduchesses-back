import { pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const sunlightEnum = pgEnum('sunlight', [
  'Low Light',
  'Partial Shade',
  'Bright Indirect Light',
  'Full Sun',
]);
export const wateringEnum = pgEnum('watering', [
  'Minimal',
  'Sparing',
  'Moderate',
  'Frequent',
]);
export const locationEnum = pgEnum('location', ['INTERIOR', 'EXTERIOR']);

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  creationDate: timestamp('creation_date').defaultNow().notNull(),
});

export const places = pgTable('places', {
  id: uuid('id').primaryKey().defaultRandom(),
  label: varchar('name', { length: 256 }).notNull(),
  userId: uuid('user_id')
    .references(() => users.id)
    .notNull(),
  location: locationEnum('location'),
});

export const plants = pgTable('plants', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id')
    .references(() => users.id)
    .notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  sunlight: sunlightEnum('sunlight'),
  watering: wateringEnum('watering'),
  adoptionDate: timestamp('adoption_date', { mode: 'string' }).defaultNow(),
  placeId: uuid('place_id').references(() => places.id),
  imageUrl: varchar('image_url'),
});
