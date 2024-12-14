"use strict";
function computeNextOccurrence(recurrenceInDays) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + recurrenceInDays);
    return currentDate;
}
