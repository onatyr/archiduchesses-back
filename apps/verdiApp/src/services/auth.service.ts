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
                if (response.status !== 200) {
                    console.log("Connexion unauthorized")
                    return false
                }
                const token = response.data.token
                localStorage.setItem('token', token)
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
                return true
            }
        ).catch(e => {
            console.log("heeey")
            console.log(e)
            return false
        })
    }
}
