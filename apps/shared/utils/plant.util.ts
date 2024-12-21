import { Sunlight } from "../models";

export function getSunlightExposure(lux: number): Sunlight {
  if (lux >= 50000) {
    return Sunlight.FullSun;
  } else if (lux >= 15000) {
    return Sunlight.BrightIndirectLight;
  } else if (lux >= 3000) {
    return Sunlight.PartialShade;
  } else {
    return Sunlight.LowLight;
  }
}