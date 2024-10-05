// todo methods here should only be used by other services
import {axiosInstance} from "@/main";

export class ApiService {
    private readonly baseUrl = ""

    constructor(baseRoute: string) {
        this.baseUrl += baseRoute || "";
    }

    async _get(route: string, queryParams: URLSearchParams | null = null) {
        const getRoute = queryParams ? route + "?" + queryParams : route;
        return axiosInstance.get(this.baseUrl + getRoute);
    }

    async _post(route: string, data: any) {
        const headers: any = {};
        if (!(data instanceof FormData)) {
            headers["Content-Type"] = "application/json";
        }
        return axiosInstance.post(this.baseUrl + route, data, {headers});
    }
}
