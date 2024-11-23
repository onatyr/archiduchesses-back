CREATE TABLE IF NOT EXISTS "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"place_id" uuid NOT NULL,
	"location" "location"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_to_places" (
	"user_id" uuid NOT NULL,
	"place_id" uuid NOT NULL,
	CONSTRAINT "users_to_places_user_id_place_id_pk" PRIMARY KEY("user_id","place_id")
);
--> statement-breakpoint
ALTER TABLE "plants" DROP CONSTRAINT "plants_place_id_places_id_fk";
--> statement-breakpoint
ALTER TABLE "plants" ADD COLUMN "room_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rooms" ADD CONSTRAINT "rooms_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_places" ADD CONSTRAINT "users_to_places_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_places" ADD CONSTRAINT "users_to_places_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "plants" ADD CONSTRAINT "plants_room_id_rooms_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "places" DROP COLUMN IF EXISTS "location";--> statement-breakpoint
ALTER TABLE "plants" DROP COLUMN IF EXISTS "place_id";