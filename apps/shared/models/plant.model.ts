export type Plant = {
  id: string;
  userId: string;
  name: string;
  sunlight: Sunlight;
  watering: Watering;
  adoptionDate: string;
  placeId: string | undefined;
  imageUrl: string;
};

/* eslint-disable no-unused-vars */
export enum Sunlight {
  FullSun = 'Full Sun',
  BrightIndirectLight = 'Bright Indirect Light',
  PartialShade = 'Partial Shade',
  LowLight = 'Low Light',
}

/* eslint-disable no-unused-vars */
export enum Watering {
  Frequent = 'Frequent',
  Moderate = 'Moderate',
  Sparing = 'Sparing',
  Minimal = 'Minimal',
}
