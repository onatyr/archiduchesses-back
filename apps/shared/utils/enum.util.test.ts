import { Sunlight } from "../models";
import { getOrdinal } from "./enum.util";

describe('getOrdinal', () => {

  test('Sunlight.LowLight ordinal equal to 0', () => {
    expect(getOrdinal(Sunlight, Sunlight.LowLight)).toBe(0)
  })
})
