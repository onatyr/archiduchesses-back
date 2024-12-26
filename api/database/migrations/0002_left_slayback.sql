-- Step 1: Create new enum types
CREATE TYPE sunlight_new AS ENUM (
  'Low Light',
  'Partial Shade',
  'Bright Indirect Light',
  'Full Sun'
);

CREATE TYPE watering_new AS ENUM (
  'Minimal',
  'Sparing',
  'Moderate',
  'Frequent'
);

-- Step 2: Update the columns to use the new enum types
ALTER TABLE plants
  ALTER COLUMN sunlight TYPE sunlight_new USING sunlight::text::sunlight_new;

ALTER TABLE plants
  ALTER COLUMN watering TYPE watering_new USING watering::text::watering_new;

-- Step 3: Drop the old enum types
DROP TYPE sunlight;
DROP TYPE watering;

-- Step 4: Rename the new enum types (optional)
ALTER TYPE sunlight_new RENAME TO sunlight;
ALTER TYPE watering_new RENAME TO watering;

ALTER TABLE "plants" DROP COLUMN IF EXISTS "family";