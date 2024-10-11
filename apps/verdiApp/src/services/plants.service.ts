import {ApiService} from "../../../shared/service/api.service";
import {Plant} from "../../../../dist/shared/models/plant.model";
import {axiosInstance} from "@/main";

export class PlantsService extends ApiService {
    constructor() {
        super(axiosInstance, "plant");
    }

    async getAll(): Promise<Plant[]> {
        return this._get("/all")
            .then(response => {
                return response.data
            })
            .catch(e => {
                console.log(e)
                return []
            })
    }

    async insertPlant(plant: FormData): Promise<boolean> {  // todo maybe find a better way to type plant
        return this._post("/new", plant)
            .then(response => {
                console.log(response)
                return true
            })
            .catch(e => {
                console.log(e)
                return false
            })
    }
}
