import { getSunlightExposure } from "@shared/utils/plant.util";
import { Sunlight } from "@shared/models";

describe('getSunlightExposure', () => {

  test('2000 lux equals Sunlight.LowLight', () => {
    expect(getSunlightExposure(2000)).toBe(Sunlight.LowLight)
  })

  test('4000 lux equals Sunlight.PartialShade', () => {
    expect(getSunlightExposure(4000)).toBe(Sunlight.PartialShade)
  })

  test('20000 lux equals Sunlight.BrightIndirectLight', () => {
    expect(getSunlightExposure(20000)).toBe(Sunlight.BrightIndirectLight)
  })

  test('100000 lux equals Sunlight.FullSun', () => {
    expect(getSunlightExposure(100000)).toBe(Sunlight.FullSun)
  })
})


