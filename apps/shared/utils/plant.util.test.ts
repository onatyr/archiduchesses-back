import { getSunlightExposure } from "@shared/utils/plant.util";
import { Sunlight } from "@shared/models";

test('getSunlightExposure', () => {
  expect(getSunlightExposure(2000)).toBe(Sunlight.LowLight)
})