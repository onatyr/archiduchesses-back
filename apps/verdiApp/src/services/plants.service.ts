import {ApiService} from "@/services/api.service";

export class PlantsService extends ApiService {
    constructor() {
        super("plant");
    }

    getAll() {
        return this._get("all")
    }
}