import { PlantsWithTaskResult } from '@api/controllers/plants/plants.query';
import { PlantsWithTasksFormatted } from '@api/controllers/plants/plants.util';

export const plantWithNoTaskInput: PlantsWithTaskResult = [
  {
    plants: {
      id: '3',
      userId: 'user1',
      name: 'Plant 3',
      species: 'Diffenbach',
      sunlight: 'Low Light',
      wateringRecurrenceDays: 1000,
      adoptionDate: null,
      imageUrl: null,
      roomId: null,
    },
    tasks: null,
  },
];

export const plantWithNoTaskExpected: PlantsWithTasksFormatted = [
  {
    id: '3',
    userId: 'user1',
    name: 'Plant 3',
    species: 'Diffenbach',
    sunlight: 'Low Light',
    wateringRecurrenceDays: 1000,
    adoptionDate: null,
    imageUrl: null,
    roomId: null,
    tasks: [],
  },
];

export const plantWithSingleTaskInput: PlantsWithTaskResult = [
  {
    plants: {
      id: '2',
      userId: 'user1',
      name: 'Plant 2',
      species: 'Monstera',
      sunlight: 'Full Sun',
      wateringRecurrenceDays: 1000,
      adoptionDate: null,
      imageUrl: null,
      roomId: null,
    },
    tasks: {
      id: 'task3',
      plantId: '2',
      type: 'watering',
      dueDate: new Date('2023-10-05'),
      done: false,
    },
  },
];

export const plantWithSingleTaskExpected: PlantsWithTasksFormatted = [
  {
    id: '2',
    userId: 'user1',
    name: 'Plant 2',
    species: 'Monstera',
    sunlight: 'Full Sun',
    wateringRecurrenceDays: 1000,
    adoptionDate: null,
    imageUrl: null,
    roomId: null,
    tasks: [
      {
        id: 'task3',
        plantId: '2',
        type: 'watering',
        dueDate: new Date('2023-10-05'),
        done: false,
      },
    ],
  },
];

export const plantWithMultipleTasksInput: PlantsWithTaskResult = [
  {
    plants: {
      id: '1',
      userId: 'user1',
      name: 'Plant 1',
      species: 'Cactous',
      sunlight: 'Full Sun',
      wateringRecurrenceDays: 1000,
      adoptionDate: null,
      imageUrl: null,
      roomId: null,
    },
    tasks: {
      id: 'task1',
      plantId: '1',
      type: 'watering',
      dueDate: new Date('2023-10-01'),
      done: false,
    },
  },
  {
    plants: {
      id: '1',
      userId: 'user1',
      name: 'Plant 1',
      species: 'Cactous',
      sunlight: 'Full Sun',
      wateringRecurrenceDays: 1000,
      adoptionDate: null,
      imageUrl: null,
      roomId: null,
    },
    tasks: {
      id: 'task2',
      plantId: '1',
      type: 'watering',
      dueDate: new Date('2023-10-05'),
      done: false,
    },
  },
];

export const plantWithMultipleTasksExpected: PlantsWithTasksFormatted = [
  {
    id: '1',
    userId: 'user1',
    name: 'Plant 1',
    species: 'Cactous',
    sunlight: 'Full Sun',
    wateringRecurrenceDays: 1000,
    adoptionDate: null,
    imageUrl: null,
    roomId: null,
    tasks: [
      {
        id: 'task1',
        plantId: '1',
        type: 'watering',
        dueDate: new Date('2023-10-01'),
        done: false,
      },
      {
        id: 'task2',
        plantId: '1',
        type: 'watering',
        dueDate: new Date('2023-10-05'),
        done: false,
      },
    ],
  },
];

export const plantWithTaskDuplicatedInput: PlantsWithTaskResult = [
  {
    plants: {
      id: '1',
      userId: 'user1',
      name: 'Plant 1',
      species: 'Cactous',
      sunlight: 'Full Sun',
      wateringRecurrenceDays: 1000,
      adoptionDate: null,
      imageUrl: null,
      roomId: null,
    },
    tasks: {
      id: 'task1',
      plantId: '1',
      type: 'watering',
      dueDate: new Date('2023-10-01'),
      done: false,
    },
  },
  {
    plants: {
      id: '1',
      userId: 'user1',
      name: 'Plant 1',
      species: 'Cactous',
      sunlight: 'Full Sun',
      wateringRecurrenceDays: 1000,
      adoptionDate: null,
      imageUrl: null,
      roomId: null,
    },
    tasks: {
      id: 'task1',
      plantId: '1',
      type: 'watering',
      dueDate: new Date('2023-10-01'),
      done: false,
    },
  },
];

export const plantWithTaskDuplicatedExpected: PlantsWithTasksFormatted = [
  {
    id: '1',
    userId: 'user1',
    name: 'Plant 1',
    species: 'Cactous',
    sunlight: 'Full Sun',
    wateringRecurrenceDays: 1000,
    adoptionDate: null,
    imageUrl: null,
    roomId: null,
    tasks: [
      {
        id: 'task1',
        plantId: '1',
        type: 'watering',
        dueDate: new Date('2023-10-01'),
        done: false,
      },
    ],
  },
];
