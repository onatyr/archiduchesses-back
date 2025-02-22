import { computeNextOccurrence } from '@api/controllers/tasks/tasks.util';

describe('computeNextOccurrence', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01T00:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should compute the next occurrence correctly', () => {
    expect(computeNextOccurrence(5)).toEqual(new Date('2023-01-06T00:00:00Z'));
  });

  test('should throw an error if occurrence is less than 1 day', () => {
    expect(() => computeNextOccurrence(0)).toThrow();
  });
});
