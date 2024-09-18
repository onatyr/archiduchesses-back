
export type Plant = {
    name: string,
    type: string,
    sunlight: PlantSunlight,
    watering: PlantWatering,
    room: string,
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