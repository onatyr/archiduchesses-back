export function computeNextOccurrence(recurrenceInDays: number) {
  if (recurrenceInDays < 1)
    throw new Error('Next occurence should be in 1 day minimum');
  return new Date(
    new Date().getTime() + recurrenceInDays * 24 * 60 * 60 * 1000
  );
}
