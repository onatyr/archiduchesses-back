import {ApiService} from "@/services/api.service";

export class PlantsService extends ApiService {
    constructor() {
        super("plant");
    }

    async getAll() {
        const response = await this._get("/all")
        return response?.data ?? []
    }
}
