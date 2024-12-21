import { Sunlight } from "@lib/models";
import { getSunlightExposure } from "@lib/utils/plant.util";

test('getSunlightExposure', () => {
  expect(getSunlightExposure(2000)).toBe(Sunlight.LowLight)
})