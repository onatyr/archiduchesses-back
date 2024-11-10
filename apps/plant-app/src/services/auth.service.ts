import { ApiService } from '../../../shared/services';
import { axiosInstance } from '../main';

export default class AuthService extends ApiService {
  constructor() {
    super(axiosInstance, 'auth');
  }

  async register(
    email: string,
    password: string,
    name: string
  ): Promise<boolean> {
    try {
      const response = await this._post(
        '/register',
        JSON.stringify({
          email: email,
          password: password,
          name: name,
        })
      );

      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await this._post(
        '/login',
        JSON.stringify({
          email: email,
          password: password,
        })
      );
      this.setToken(response.data.token);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
