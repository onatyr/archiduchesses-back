function computeNextOccurrence(recurrenceInDays: number) {
  const currentDate = new Date()
  return currentDate.setDate(currentDate.getDate() + 3)
}