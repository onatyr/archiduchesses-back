import { ApiService } from '../../../shared/services/api.service';
import dotenv from 'dotenv';
import path from 'path';
import { plantBookAxiosInstance } from '../../index';
import { PlantBookDetails } from "../../../shared/models";

dotenv.config({
  path: path.resolve(__dirname, '../../../../.env'),
});

export class PlantBookService extends ApiService {
  private apiToken = process.env.PLANTBOOK_API_KEY;

  constructor() {
    super(plantBookAxiosInstance, 'https://open.plantbook.io/api/v1');
    plantBookAxiosInstance.defaults.headers.common['Authorization'] =
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
