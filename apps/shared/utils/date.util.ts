export function getCurrentDateString() {
  return new Date().toISOString().split('T')[0]
}