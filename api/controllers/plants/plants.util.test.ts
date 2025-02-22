import { formatPlantsWithTasks } from '@api/controllers/plants/plants.util';
import * as mocks from '@api/controllers/plants/plants.util.mock';

describe('formatPlantsWithTasks', () => {
  test('should format properly plants with no task in input', () => {
    expect(formatPlantsWithTasks(mocks.plantWithNoTaskInput)).toEqual(
      mocks.plantWithNoTaskExpected
    );
  });

  test('should format properly plants with single task in input', () => {
    expect(formatPlantsWithTasks(mocks.plantWithSingleTaskInput)).toEqual(
      mocks.plantWithSingleTaskExpected
    );
  });

  test('should format properly plants with multiples tasks in input', () => {
    expect(formatPlantsWithTasks(mocks.plantWithMultipleTasksInput)).toEqual(
      mocks.plantWithMultipleTasksExpected
    );
  });

  test('should format properly plants with tasks is duplicated in input', () => {
    expect(formatPlantsWithTasks(mocks.plantWithTaskDuplicatedInput)).toEqual(
      mocks.plantWithTaskDuplicatedExpected
    );
  });
});
