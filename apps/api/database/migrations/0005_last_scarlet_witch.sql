ALTER TABLE "plants" ADD COLUMN "wateringRecurrenceDays" integer;--> statement-breakpoint
ALTER TABLE "plants" DROP COLUMN IF EXISTS "watering";