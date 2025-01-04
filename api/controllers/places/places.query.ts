import { eq, inArray } from 'drizzle-orm';
import { db } from '@api/database/database';
import { places, usersToPlaces } from '@api/database/schema';

export function getAllPlacesByUserId(userId: string) {
  return db
   .select()
   .from(places)
   .where(
    inArray(
     places.id,
     db
      .select({
        placeId: usersToPlaces.placeId,
      })
      .from(usersToPlaces)
      .where(eq(usersToPlaces.userId, userId))
      .$dynamic()
    )
   )
   .$dynamic();
}