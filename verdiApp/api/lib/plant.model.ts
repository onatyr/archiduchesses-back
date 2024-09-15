
export type Plant = {
    name: string,
    type: string,
    sunlight: PlantSunlight,
    watering: PlantWatering
}

export enum PlantSunlight {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

export enum PlantWatering {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}