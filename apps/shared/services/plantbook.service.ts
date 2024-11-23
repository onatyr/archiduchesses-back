import axios from 'axios';
import { ApiService } from './api.service';
import { PlantBookDetails } from "../models";
// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({
//   path: path.resolve(__dirname, '../../../../.env'),
// });

const baseUrl = 'https://open.plantbook.io/';
export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export class PlantBookService extends ApiService {
  private apiToken = '2072a020354d0f2635ae5c0f5686617da8a5eab9';

  constructor() {
    super(axiosInstance, 'api/v1');
    axiosInstance.defaults.headers.common['Authorization'] =
      `Token ${this.apiToken}`;
  }

  async searchPlantByName(search: string): Promise<string[]> {
    return this._get(`/plant/search`, {
      alias: search,
      limit: 10,
      offset: 0,
    })
      .then((response) => {
        const plants: string[] = response.data.results.map(
          (plant: { pid: string }) => plant.pid
        );
        return plants;
      })
      .catch((e) => {
        console.error(e);
        throw Error;
      });
  }

  async getPlantDetails(pid: string): Promise<PlantBookDetails | null> {
    return this._get(`/plant/detail/${pid}`)
      .then((response: { data: PlantBookDetails }) => {
        return response.data;
      })
      .catch((e) => {
        console.error(e);
        return null;
      });
  }
}
