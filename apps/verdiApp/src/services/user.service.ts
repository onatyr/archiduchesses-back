import {ApiService} from "@/services/api.service";

export class UserService extends ApiService {
    constructor() {
        super("user");
    }

    getName(): Promise<string> {
        return this._get("/name")
            .then(response => {
                return response.data
            })
            .catch(e => {
                console.log(e)
                return ""
            })
    }
}