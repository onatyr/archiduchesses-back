import { ApiService } from '../../../shared/services/api.service';
import { axiosInstance } from '../main';

export class UserService extends ApiService {
  constructor() {
    super(axiosInstance, 'user');
  }

  async getUserName(userId: string): Promise<string> {
    return this._get(`/${userId}/name`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.error(e);
        return [];
      });
  }
}
