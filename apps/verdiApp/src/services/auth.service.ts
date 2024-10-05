import {ApiService} from "@/services/api.service";
import {axiosInstance} from "@/main";

export class AuthService extends ApiService {
    constructor() {
        super("auth");
    }

    login(email: string, password: string): Promise<boolean> {
        return this._post(
            "/login",
            JSON.stringify({
                email: email,
                password: password,
            })
        ).then(response => {
                this.setToken(response.data.token)
                return true
            }
        ).catch(e => {
            console.log(e)
            return false
        })
    }

    private setToken(token: string) {
        localStorage.setItem('token', token)
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
}
